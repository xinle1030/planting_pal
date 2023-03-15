import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:planting_pal/config/responsive.dart';
import 'package:planting_pal/config/size_config.dart';
import 'package:planting_pal/data.dart';
import 'package:planting_pal/style/colors.dart';
import 'package:planting_pal/style/style.dart';
import 'package:planting_pal/data.dart';

class CertsTable extends StatefulWidget {
  const CertsTable({Key? key}) : super(key: key);

  @override
  State<CertsTable> createState() => _CertsTableState();
}

class _CertsTableState extends State<CertsTable> {
  List<dynamic> selectedItems = [];

  void generateCertsAndPdfs() {
    List<dynamic> selectedOrders =
        selectedItems.map((e) => e['orderId']).toList();
    debugPrint(selectedOrders.toString());
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        FilledButton(
            onPressed: generateCertsAndPdfs,
            child: const Text('Generate Certs and Send Emails'),
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
                    label: Text('Price'),
                  ),
                  DataColumn(
                    label: Text('Last Updated'),
                  ),
                  DataColumn(
                    label: Text('Actions'),
                  ),
                ],
                rows: List.generate(orderData.length, (index) {
                  final item = orderData[index];
                  return DataRow(
                      cells: [
                        DataCell(Text(item['orderDate'])),
                        DataCell(Text(item['orderId'])),
                        DataCell(Text(item['userId'])),
                        DataCell(Text(item['nameOfBuyer'])),
                        DataCell(Text(item['receiverName'])),
                        DataCell(Text(item['receiverEmail'])),
                        DataCell(Text(item['countryOfOrigin'])),
                        DataCell(Text(item['amountReceived'].toString())),
                        DataCell(Text(item['updatedAt'].toString())),
                        DataCell(OutlinedButton(
                          style: OutlinedButton.styleFrom(
                            side: BorderSide(color: Colors.blue),
                          ),
                          onPressed: () {
                            debugPrint(item.toString());
                          },
                          child: const Text('View Details'),
                        )),
                      ],
                      selected: item['checked'],
                      onSelectChanged: (bool? value) {
                        setState(() {
                          item['checked'] = value!;

                          if (item['checked'] &&
                              !selectedItems.contains(item)) {
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
