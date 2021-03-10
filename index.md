---
layout: default
---



# Unity SDK
<!--- unity_sdk_link_begin --->
[Unity SDK - 0.6.17](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.17.zip)
<br>
<!--- unity_sdk_link_end --->
### What's New
<!--- unity_sdk_text_description_begin --->
- Streamlined “About” window UX by adding Welcome screen, consolidating release notes and log settings into one location
- Modified LeiaPostEffectsController to copy Leia effects to a LeiaView, not a GameObject
- Enhanced LeiaPostEffectsController so when it copies a MonoBehaviour from a root Camera to a LeiaView Camera, it will now set any LeiaView references
- Fixed frame rate drop when switching to 2D
- Resolved issue where switching from 2D to 4V/Lightfield caused IndexOutOfBoundsException
- Resolved LeiaPostEffectsController throwing error on Awake/Start if component is added during edit time
- Various minor fixes since 0.6.16
<!--- unity_sdk_text_description_end --->

### Previous Unity Releases
[Unity SDK - 0.6.16](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unity/LeiaUnitySDK_Public_v0.6.16.zip)

# Unreal SDK
<!--- unreal_sdk_link_begin --->
[Unreal SDK - 0.0.2](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unreal/LeiaLoft_Unreal_SDK_LeiaCamera_002_.4e4a563.zip)
<!--- unreal_sdk_link_end --->

<!--- unreal_sdk_text_description_begin --->
**Enhancements**
- Added ZDP capability to LeiaCameraComponent with Auto ZDP and ZDP Shear strength with Blueprint callable functions.
- Adjusted examples to have better default values.
- Added negative DOF material.
- Added Transparency effect and threshold debug view.
- LeiaCameraComponent will now search for CameraComponent to set as TargetCamera.
- Added device specific DOF shader optimizations. 
- Added raycast offset parameter to hook into UI.

**Bug Fixes**
- Fixed issue with frustum not being available in builds. Frustum display is now set to false by default on builds.
- Fixed issue where DOF material does not get added to cameras.
- Fixed issue where Convergence Offset was being affected by forward position of LeiaCamera.
- Fixed issue where touch input was not given to debug UI.
<!--- unreal_sdk_text_description_end --->

### Previous Unreal Releases
[Unreal SDK - 0.0.1](https://github.com/LeiaInc/leiainc.github.io/raw/master/Unreal/LeiaLoft_Unreal_SDK_LeiaCamera_001_bf5adb8.zip)

# Android Native SDK 
<!--- android_sdk_link_begin --->
[Android Native SDK - v0.0.5](https://github.com/LeiaInc/leiainc.github.io/raw/master/Android/LeiaLoft_NativeAndroid_SDK_2018-07-19.zip)
<!--- android_sdk_link_end --->
# Blender Plugin
<!--- blender_link_begin --->
[Blender Plugin](https://github.com/LeiaInc/leiainc.github.io/raw/master/Blender/Leia+Blender+SDK.zip)
<!--- blender_link_end --->
# Maya Plugin
<!--- maya_link_begin --->
[Maya Plugin](https://github.com/LeiaInc/leiainc.github.io/raw/master/Maya/LeiaMayaPlugin_v013.zip)
<!--- maya_link_end --->
# Cinema4D
<!--- c4d_link_begin --->
[Guide](https://github.com/LeiaInc/leiainc.github.io/raw/master/C4D/2%20Step%20Rendering%20with%20cinema%204d.pdf)
<!--- c4d_link_end --->
# 4V video
[Dandellion_2x2.mp4 - Shortened](https://github.com/LeiaInc/leiainc.github.io/raw/master/DandellionsSnip_2x2.mp4)

# 4V image
[Optician2x_2x2.jpg](https://github.com/LeiaInc/leiainc.github.io/raw/master/Optician2x_2x2.jpg)
