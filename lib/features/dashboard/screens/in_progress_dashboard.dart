import 'dart:ui';

import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:planting_pal/components/tables/in_progress_table.dart';
import 'package:planting_pal/config/responsive.dart';
import 'package:planting_pal/config/size_config.dart';
import 'package:planting_pal/style/colors.dart';
import 'package:planting_pal/style/style.dart';

import '../../../components/components.dart';

class InProgressDashboard extends StatelessWidget {
  const InProgressDashboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    GlobalKey<ScaffoldState> _drawerKey = GlobalKey();
    SizeConfig().init(context);
    return SafeArea(
        child: Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // if (Responsive.isDesktop(context))
        //   const Expanded(
        //     flex: 1,
        //     child: SideMenu(),
        //   ),
        Expanded(
          flex: 10,
          child: SizedBox(
            height: SizeConfig.screenHeight,
            child: SingleChildScrollView(
              padding: EdgeInsets.all(Responsive.isDesktop(context) ? 30 : 22),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const DashboardHeader(),
                  InProgressTable(),
                  // if (!Responsive.isDesktop(context)) const PaymentsDetailList()
                ],
              ),
            ),
          ),
        )
      ],
    ));
  }
}
