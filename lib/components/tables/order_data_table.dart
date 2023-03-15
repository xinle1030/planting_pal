import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:planting_pal/config/responsive.dart';
import 'package:planting_pal/config/size_config.dart';
import 'package:planting_pal/style/colors.dart';
import 'package:planting_pal/style/style.dart';

import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:planting_pal/models/order.dart';

class OrderDataTable extends StatefulWidget {
  const OrderDataTable({Key? key}) : super(key: key);

  static const statusForDisplay = "unfulfilled";

  @override
  State<OrderDataTable> createState() => _OrderDataTableState();
}

class _OrderDataTableState extends State<OrderDataTable> {
  List<dynamic> selectedItems = [];

  List<Order> orderData = [];

  Future<void> generatePDFs() async {
    List<dynamic> selectedOrders =
        selectedItems.map((e) => e.orderId.toString()).toList();
    debugPrint(selectedOrders.toString());

    if (selectedOrders.length > 0) {
      http.Response response;

      final url = 'http://127.0.0.1:8080/api/orders/tynote';

      Uri uri =
          Uri.parse(url).replace(queryParameters: {'orderIds': selectedOrders});

      response = await http.put(uri);

      if (response.statusCode == 200) {
        // handle success response'
        print(response.body);
      } else {
        // handle error response
        print("error");
        print(response.body);
      }
    }
  }

  Future<void> getOrderData() async {
    http.Response response;

    final url = "http://127.0.0.1:8080/api/orders?status=" +
        OrderDataTable.statusForDisplay;

    response = await http.get(
      Uri.parse(url),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
    );

    if (response.statusCode == 200) {
      List<dynamic> orderList = jsonDecode(response.body)['orders'];
      List<Order> orders = List<Order>.from(
          orderList.map((order) => Order.fromCheckedJson(order)));
      print(orders);
      setState(() {
        orderData = orders;
      });
    } else {
      print("error");
    }
  }

  @override
  void initState() {
    super.initState();
    getOrderData();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        FilledButton(
            onPressed: generatePDFs,
            child: const Text('Generate PDFs'),
            style: ButtonStyle(
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(6.0),
                        side: BorderSide(
                          color: Color.fromARGB(0, 25, 28, 88),
                        ))))),
        SizedBox(
          height: Responsive.isDesktop(context)
              ? SizeConfig.blockSizeVertical! * 3
              : SizeConfig.blockSizeVertical! * 2,
        ),
        SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: SingleChildScrollView(
              scrollDirection: Axis.vertical,
              child: DataTable(
                columns: const <DataColumn>[
                  DataColumn(
                    label: Text('Order Date'),
                  ),
                  DataColumn(
                    label: Text('Order ID'),
                  ),
                  DataColumn(
                    label: Text('User ID'),
                  ),
                  DataColumn(
                    label: Text('Buyer Name'),
                  ),
                  DataColumn(
                    label: Text('Receiver Name'),
                  ),
                  DataColumn(
                    label: Text('Receiver Email'),
                  ),
                  DataColumn(
                    label: Text('Country'),
                  ),
                  DataColumn(
                    label: Text('Tree Coordinates Required?'),
                  ),
                  DataColumn(
                    label: Text('Number of Trees'),
                  ),
                  DataColumn(
                    label: Text('Price'),
                  ),
                  DataColumn(
                    label: Text('Last Updated'),
                  ),
                ],
                rows: List.generate(orderData.length, (index) {
                  final item = orderData[index];
                  return DataRow(
                      cells: [
                        DataCell(Text(item.orderDate!)),
                        DataCell(Text(item.orderId!.toString())),
                        DataCell(Text(item.userId!.toString())),
                        DataCell(Text(item.nameOfBuyer!)),
                        DataCell(Text(item.receiverName!)),
                        DataCell(Text(item.receiverEmail!)),
                        DataCell(
                            Text(item.treeCoordinatesRequired!.toString())),
                        DataCell(Text(item.countryOfOrigin!)),
                        DataCell(Text(item.numberOfTrees!.toString())),
                        DataCell(Text(item.amountReceived!.toString())),
                        DataCell(Text(item.updatedAt!.toString())),
                      ],
                      selected: item.checked!,
                      onSelectChanged: (bool? value) {
                        setState(() {
                          item.checked = value!;

                          if (item.checked! && !selectedItems.contains(item)) {
                            selectedItems.add(item);
                          } else {
                            selectedItems.remove(item);
                          }
                        });
                      });
                }),
              ),
            )),
      ],
    );
  }
}
