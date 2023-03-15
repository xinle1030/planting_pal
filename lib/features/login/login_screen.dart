import 'package:flutter/material.dart';
import 'package:planting_pal/config/responsive.dart';

import 'package:planting_pal/components/background.dart';
import 'package:provider/provider.dart';
import '../../providers/loading_provider.dart';
import 'components/login_form.dart';
import 'components/login_screen_top_image.dart';

class LoginScreen extends StatefulWidget {
  static const String id = '/';
  
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    double screenHeight = MediaQuery.of(context).size.height;

    return Consumer<LoadingProvider>(builder: (_, loadingProvider, __) {
      return loadingProvider.isLoading
          ? Container(
              width: screenWidth,
              height: screenHeight,
              color: Colors.white,
              child: Center(
                child: Container(
                  //color: Colors.red,
                  height: 350,
                  width: 200,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Image.asset('assets/loading.gif'),
                    ],
                  ),
                ),
              ),
            )
          : Background(
              child: SingleChildScrollView(
                child: Responsive(
                  mobile: const MobileLoginScreen(),
                  desktop: Row(
                    children: [
                      const Expanded(
                        child: LoginScreenTopImage(),
                      ),
                      Expanded(
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: const [
                            SizedBox(
                              width: 450,
                              child: LoginForm(),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            );
    });
  }
}

class MobileLoginScreen extends StatefulWidget {
  const MobileLoginScreen({
    Key? key,
  }) : super(key: key);

  @override
  State<MobileLoginScreen> createState() => _MobileLoginScreenState();
}

class _MobileLoginScreenState extends State<MobileLoginScreen> {
  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    double screenHeight = MediaQuery.of(context).size.height;

    return Consumer<LoadingProvider>(builder: (_, loadingProvider, __) {
      return loadingProvider.isLoading
          ? Container(
              width: screenWidth,
              height: screenHeight,
              color: Colors.white,
              child: Center(
                child: Container(
                  //color: Colors.red,
                  height: 350,
                  width: 200,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Image.asset('assets/loading.gif'),
                    ],
                  ),
                ),
              ),
            )
          : Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                const LoginScreenTopImage(),
                Row(
                  children: const [
                    Spacer(),
                    Expanded(
                      flex: 8,
                      child: LoginForm(),
                    ),
                    Spacer(),
                  ],
                ),
              ],
            );
    });
  }
}
