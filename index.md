---
layout: default
---



# Unity SDK
<!--- unity_sdk_link_begin --->
[Unity SDK - 0.6.19](https://github.com/LeiaInc/leiainc.github.io/blob/master/Unity/LeiaUnitySDK_Public_v0.6.19.zip)
<br>
<!--- unity_sdk_link_end --->
### What's New
<!--- unity_sdk_text_description_begin --->
Enhancements 
- Added support for Unity apps to enter ImmersiveMode on the Lume Pad. When the Lume Pad's lights are in ImmersiveMode, some periodic imagery can appear 3D but 2D content can simultaneously appear 2D. This is especially valuable for displaying periodic imagery in 3D while you display text at full resolution.
- LeiaMedia : Automatically select best meda tile per view when media tiles do not match user's display. Fixed an ambiguous case where in 2D mode, LeiaMedia would show left most tile. Now in 2D, the left-leaning center tile is displayed.
- Added AndroidLeiaDevice SetBacklightTransition and modified SetDisplayLightBalance to give users better control over 2D/3D light transitions. To transition backlight intensity, try using AndroidLeiaDevice :: SetDisplayLightBalance(1f...0f).
- Added more shader variants to LeiaLoft_Slanted_8V. This takes longer to compile, but there are more debug and performance options that are automatically selected on devices where the more performant route can be taken.
- Support setting a LeiaCamera's ViewportRect. This allows devs to crop interlaced LeiaCamera content to fill just a section of the screen. Devs must set the LeiaCamera "Fill technique" to a ViewportRectFill technique depending upon their Unity verison and graphics effects stack. Generally simple Forward rendering without camera effects renders square pixels with TruncatedRectOfFullRenderTexture, and complex rendering using AA, HDR, post-processing, or Deferred rendering on some versions of Unity renders square pixels with FullRectOfTruncatedRenderTexture.
- Added support for an Override profile which uses no LitByLeia firmware (and will not engage device backlight or retrieve display-appropriate parameters).These override builds can be run on common build platforms without LitByLeia support. To use an Override profile: create a file in <projectPath>/Assets/LeiaLoft/DisplayConfiguration_Override.json which contains json data for your Override profile, set Player Settings -> Other Settings -> Scripting Define Symbols to contain LEIALOFT_CONFIG_OVERRIDE, confirm that when you enter play mode in the editor, your Override profile is used to draw content, build to your device and confirm that when you play the build on your device, your Override profile is used to draw content
- Hot-fixed an issue where AlignmentOffset was not applying a horizontal pixel translation. Changing AlignmentOffset.x now shifts views to the right (mod ViewCount).
<!--- unity_sdk_text_description_end --->

### Previous Unity Releases

[Unity SDK - 0.6.18.1](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.18_1.zip) <br>
[Unity SDK - 0.6.18](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.18.zip) <br>
[Unity SDK - 0.6.17](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.17.zip) <br>
[Unity SDK - 0.6.16](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.16.zip)

# Unreal SDK
<!--- unreal_sdk_link_begin --->
[Unreal SDK - 0.0.3c](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unreal/LeiaLoft_Unreal_SDK_LeiaCamera_003c.zip)
<!--- unreal_sdk_link_end --->

<!--- unreal_sdk_text_description_begin --->
**Enhancements**
- Fixed ghosting issue 
- Fixed issue where “Use ZDP Share” and “Auto ZDP” default settings were causing distortion
- Resolved issue where LeiaCineCameraPawn caused crash
<!--- unreal_sdk_text_description_end --->

### Previous Unreal Releases
[Unreal SDK - 0.0.3b](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unreal/LeiaLoft_Unreal_SDK_LeiaCamera_003b.zip)<br>
[Unreal SDK - 0.0.3a](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unreal/LeiaLoft_Unreal_SDK_LeiaCamera_003a.zip)<br>
[Unreal SDK - 0.0.2](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unreal/LeiaLoft_Unreal_SDK_LeiaCamera_002_.4e4a563.zip)<br>
[Unreal SDK - 0.0.1](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unreal/LeiaLoft_Unreal_SDK_LeiaCamera_001_bf5adb8.zip)

# Android Native SDK 
<!--- android_sdk_link_begin --->
[Android Native SDK - v0.0.5](https://github.com/LeiaInc/leiainc.github.io/raw/master/Android/LeiaLoft_NativeAndroid_SDK_2018-07-19.zip)
<!--- android_sdk_link_end --->
# Blender Plugin
<!--- blender_link_begin --->
[Blender Plugin - 1.0](https://github.com/LeiaInc/leiainc.github.io/raw/master/Blender/Leia+Blender+SDK.zip)
<!--- blender_link_end --->
# Maya Plugin
<!--- maya_link_begin --->
[Maya Plugin - 0.1.3](https://github.com/LeiaInc/leiainc.github.io/raw/master/Maya/LeiaMayaPlugin_v013.zip)
<!--- maya_link_end --->
# Cinema4D
<!--- c4d_link_begin --->
[Guide](https://github.com/LeiaInc/leiainc.github.io/raw/master/C4D/2%20Step%20Rendering%20with%20cinema%204d.pdf)
<!--- c4d_link_end --->
# 4V video
[Dandellion_2x2.mp4 - Shortened](https://github.com/LeiaInc/leiainc.github.io/raw/master/DandellionsSnip_2x2.mp4)

# 4V image
[Optician2x_2x2.jpg](https://github.com/LeiaInc/leiainc.github.io/raw/master/Optician2x_2x2.jpg)
