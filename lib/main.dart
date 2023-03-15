import 'package:flutter/material.dart';
import 'package:planting_pal/features/Login/login_screen.dart';
import 'package:planting_pal/home.dart';
import 'package:planting_pal/providers/loading_provider.dart';
import 'package:planting_pal/style/colors.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MultiProvider(providers: [
    ChangeNotifierProvider(
      create: (context) => LoadingProvider(),
    ),
  ], child: const MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'PlantingPal',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        scaffoldBackgroundColor: AppColors.primaryBg,
      ),
      routes: {
        LoginScreen.id: (context) => LoginScreen(),
        Home.id: (context) => Home(),
      },
    );
  }
}
