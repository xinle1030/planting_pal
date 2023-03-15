import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:planting_pal/config/responsive.dart';
import 'package:planting_pal/config/size_config.dart';
import 'package:planting_pal/data.dart';
import 'package:planting_pal/style/colors.dart';
import 'package:planting_pal/style/style.dart';
import 'package:planting_pal/data.dart';

class PlantingTable extends StatefulWidget {
  const PlantingTable({Key? key}) : super(key: key);

  @override
  State<PlantingTable> createState() => _PlantingTableState();
}

class _PlantingTableState extends State<PlantingTable> {
  List<dynamic> selectedItems = [];

  void downloadPDFs() {
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
            onPressed: downloadPDFs,
            child: const Text('Download PDFs'),
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
                    label: Text('Tree Coordinates Required?'),
                  ),
                  DataColumn(
                    label: Text('Number of Trees'),
                  ),
                  DataColumn(
                    label: Text('Thank You Notes PDF Link'),
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
                  debugPrint(item.toString());
                  return DataRow(
                      cells: [
                        DataCell(Text(item['orderDate'])),
                        DataCell(Text(item['orderId'])),
                        DataCell(Text(item['userId'])),
                        DataCell(Text(item['nameOfBuyer'])),
                        DataCell(Text(item['receiverName'])),
                        DataCell(
                            Text(item['treeCoordinatesRequired'].toString())),
                        DataCell(Text(item['numberOfTrees'].toString())),
                        DataCell(Text(item['pdfLink'].toString())),
                        DataCell(Text(item['updatedAt'].toString())),
                        DataCell(OutlinedButton(
                          style: OutlinedButton.styleFrom(
                            side: BorderSide(color: Colors.blue),
                          ),
                          onPressed: () {
                            debugPrint(item['orderId']);
                          },
                          child: const Text('Update'),
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
