import 'dart:ui';

import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:planting_pal/components/tables/in_progress_table.dart';
import 'package:planting_pal/config/responsive.dart';
import 'package:planting_pal/config/size_config.dart';
import 'package:planting_pal/features/dashboard/screens/certs_dashboard.dart';
import 'package:planting_pal/features/dashboard/screens/fulfilled_dashboard.dart';
import 'package:planting_pal/features/dashboard/screens/planting_dashboard.dart';
import 'package:planting_pal/style/colors.dart';
import 'package:planting_pal/style/style.dart';

import 'components/components.dart';
import 'features/screens.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    GlobalKey<ScaffoldState> _drawerKey = GlobalKey();
    SizeConfig().init(context);

    const tabs = TabBar(
      isScrollable: true,
      tabs: [
        Tab(
            child: Text('Unfulfilled',
                style: TextStyle(
                  color: AppColors.black,
                ))),
        Tab(
            child: Text('Processing',
                style: TextStyle(
                  color: AppColors.black,
                ))),
        Tab(
            child: Text('Planting Required',
                style: TextStyle(
                  color: AppColors.black,
                ))),
        Tab(
            child: Text('Generate Certs',
                style: TextStyle(
                  color: AppColors.black,
                ))),
        Tab(
            child: Text('Fulfilled',
                style: TextStyle(
                  color: AppColors.black,
                ))),
      ],
    );

    return DefaultTabController(
      length: 5,
      child: Scaffold(
        key: _drawerKey,
        drawer: const SizedBox(
          width: 100,
        ),
        appBar: AppBar(
          elevation: 0,
          backgroundColor: AppColors.white,
          actions: const [AppBarActionItem()],
          bottom: tabs,
        ),
        body: TabBarView(
          children: [
            UnfulfilledDashboard(),
            InProgressDashboard(),
            PlantingDashboard(),
            CertsDashboard(),
            FulfilledDashboard(),
          ],
        ),
      ),
    );
  }
}
