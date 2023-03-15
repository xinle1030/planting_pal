import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:planting_pal/config/responsive.dart';
import 'package:planting_pal/config/size_config.dart';
import 'package:planting_pal/data.dart';
import 'package:planting_pal/style/colors.dart';
import 'package:planting_pal/style/style.dart';
import 'package:planting_pal/data.dart';

class OrderDataTable extends StatefulWidget {
  const OrderDataTable({Key? key}) : super(key: key);

  @override
  State<OrderDataTable> createState() => _OrderDataTableState();
}

class _OrderDataTableState extends State<OrderDataTable> {
  List<dynamic> selectedItems = [];

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
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
                label: Text('Tree Coordinates Required?'),
              ),
              DataColumn(
                label: Text('Country'),
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
              return DataRow(cells: [
                DataCell(Text(item['orderDate'])),
                DataCell(Text(item['orderId'])),
                DataCell(Text(item['userId'])),
                DataCell(Text(item['nameOfBuyer'])),
                DataCell(Text(item['receiverName'])),
                DataCell(Text(item['receiverEmail'])),
                DataCell(Text(item['treeCoordinatesRequired'].toString())),
                DataCell(Text(item['countryOfOrigin'])),
                DataCell(Text(item['numberOfTrees'].toString())),
                DataCell(Text(item['amountReceived'].toString())),
                        DataCell(Text(item['updatedAt'].toString())),

              ]);
            }),
          ),
        ));
  }
}
