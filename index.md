---
layout: default
---



# Unity SDK
<!--- unity_sdk_link_begin --->
[Unity SDK - 0.6.22](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.22.zip)
<br>
<!--- unity_sdk_link_end --->
### What's New
<!--- unity_sdk_text_description_begin --->

Features

        2022-06-25
            Added convergency distance modification by handles transform.
            Leia media recorder unity version recommendation.

        2022-06-22
            LeiaDisplay support for edit mode

        2022-01-03
            Modified LeiaConfigSettingsUI prefab to only show ACT Landscape or ACT Portrait depending upon device orientation.

        2021-12-27
            We can copy data again using more robust process. The other one broke with PPSV2 due to PPSV2 issue.
            Remove special reference storage dictionary which was allowing us to avoid special cases. Now have special cases for root Camera reference (gets LeiaView's reference), LeiaView (gets this LeiaView reference), and CommandBuffer (set to null to avoid tracking another Camera's CB)
            There are 4 Unity PPS CBs, and 3 LeiaView CBs (2 for setting view index, 1 for un-setting view index)

        2021-12-19
            Standardized serialization of LeiaMedia types (Texture, Video, VideoURL). Scenes using LeiaMediaViewer and LeiaMediaViewer variables will need to be re-serialized.

Fixes

        2021-12-23
            Resolved an issue where Leia Unity SDK and Unity's PostProcessingStack V3 together would generate many NullReferenceExceptions every frame.

        2021-12-01
            Resolved an issue where convergence plane would always be drawn for full screen, even when LeiaCamera's ViewportRect was smaller than full screen.

<!--- unity_sdk_text_description_end --->

### Previous Unity Releases

[Leia Unity SDK LeiaRemote v2 - latest](https://github.com/LeiaInc/leiainc.github.io/raw/master/LeiaRemote2/LeiaRemote2_Latest.zip) <br>
[Unity SDK - 0.6.21](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.21.zip) <br>
[Unity SDK - 0.6.20](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.20.zip) <br>
[Unity SDK - 0.6.19.1](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.19.1.zip) <br>
[Unity SDK - 0.6.19](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.19.zip) <br>
[Unity SDK - 0.6.18.1](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.18_1.zip) <br>
[Unity SDK - 0.6.18](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.18.zip) <br>
[Unity SDK - 0.6.17](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.17.zip) <br>
[Unity SDK - 0.6.16](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.16.zip) <br>

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
