/** @format */
/** @format */
import React, { useRef, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Audio } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");

import Slider from "@react-native-community/slider";

class PlaylistItem {
  constructor(name, uri, image) {
    this.name = name;
    this.uri = uri;
    this.image = image;
  }
}

const PLAYLIST = [
  new PlaylistItem(
    "Comfort Fit - “Sorry”",
    "https://sample-music.netlify.app/death%20bed.mp3"
  ),
  new PlaylistItem(
    "Mildred Bailey – “All Of Me”",
    "https://sample-music.netlify.app/Bad%20Liar.mp3"
  ),
  new PlaylistItem(
    "Hamlet - Act V",
    "https://sample-music.netlify.app/Faded.mp3"
  ),
  new PlaylistItem(
    "Hamlet - Act V",
    "https://sample-music.netlify.app/Solo.mp3"
  ),
  new PlaylistItem(
    "Hamlet - Act V",
    "https://sample-music.netlify.app/Hate%20Me.mp3"
  ),
];

// const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");

const LOADING_STRING = "Loading...";
const BUFFERING_STRING = "Buffering...";
const RATE_SCALE = 3.0;

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.isSeeking = false;
    this.shouldPlayAtEndOfSeek = false;
    this.playbackInstance = null;
    this.state = {
      playbackInstanceName: LOADING_STRING,
      playbackInstancePosition: null,
      playbackInstanceDuration: null,
      shouldPlay: false,
      isPlaying: false,
      isBuffering: false,
      isLoading: true,
      fontLoaded: false,
      volume: 1.0,
      rate: 1.0,
      portrait: null,
      showValumeBox: false,
      duration: "00:00:00",
      timeElapsed: "00:00:00",
    };
  }

  componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    (async () => {
      await Font.loadAsync({});
      this.setState({ fontLoaded: true });
    })();

    this._loadNewPlaybackInstance(false);
  }

  async _loadNewPlaybackInstance(playing) {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setOnPlaybackStatusUpdate(null);
      this.playbackInstance = null;
    }

    const source = { uri: PLAYLIST[this.index].uri };
    const initialStatus = {
      shouldPlay: playing,
      rate: this.state.rate,
      volume: this.state.volume,
    };

    const { sound, status } = await Audio.Sound.create(
      source,
      initialStatus,
      this._onPlaybackStatusUpdate
    );
    this.playbackInstance = sound;

    this._updateScreenForLoading(false);
  }

  _updateScreenForLoading(isLoading) {
    if (isLoading) {
      this.setState({
        isPlaying: false,
        playbackInstanceName: LOADING_STRING,
        playbackInstanceDuration: null,
        playbackInstancePosition: null,
        isLoading: true,
      });
    } else {
      this.setState({
        playbackInstanceName: PLAYLIST[this.index].name,
        portrait: PLAYLIST[this.index].image,
        isLoading: false,
      });
    }
  }

  _onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      this.setState({
        playbackInstancePosition: status.positionMillis,
        playbackInstanceDuration: status.durationMillis,
        shouldPlay: status.shouldPlay,
        isPlaying: status.isPlaying,
        isBuffering: status.isBuffering,
        rate: status.rate,
        volume: status.volume,
      });
      if (status.didJustFinish) {
        this._advanceIndex(true);
        this._updatePlaybackInstanceForIndex(true);
      }
    } else {
      if (status.error) {
        console.log(`FATAL PLAYER ERROR: ${status.error}`);
      }
    }
  };

  _advanceIndex(forward) {
    this.index =
      (this.index + (forward ? 1 : PLAYLIST.length - 1)) % PLAYLIST.length;
  }

  async _updatePlaybackInstanceForIndex(playing) {
    this._updateScreenForLoading(true);

    this._loadNewPlaybackInstance(playing);
  }

  _onPlayPausePressed = () => {
    if (this.playbackInstance != null) {
      if (this.state.isPlaying) {
        this.playbackInstance.pauseAsync();
      } else {
        this.playbackInstance.playAsync();
      }
    }
  };

  _onStopPressed = () => {
    if (this.playbackInstance != null) {
      this.playbackInstance.stopAsync();
    }
  };

  _onForwardPressed = () => {
    if (this.playbackInstance != null) {
      this._advanceIndex(true);
      this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
    }
  };

  _onBackPressed = () => {
    if (this.playbackInstance != null) {
      this._advanceIndex(false);
      this._updatePlaybackInstanceForIndex(this.state.shouldPlay);
    }
  };
  handleVolumeBox = () => {
    this.setState({ showValumeBox: !this.state.showValumeBox });
  };

  _onVolumeSliderValueChange = (value) => {
    if (this.playbackInstance != null) {
      this.playbackInstance.setVolumeAsync(value);
    }
  };

  _trySetRate = async (rate) => {
    if (this.playbackInstance != null) {
      try {
        await this.playbackInstance.setRateAsync(rate);
      } catch (error) {
        // Rate changing could not be performed, possibly because the client's Android API is too old.
      }
    }
  };

  _onRateSliderSlidingComplete = async (value) => {
    this._trySetRate(value * RATE_SCALE);
  };

  _onSeekSliderValueChange = () => {
    if (this.playbackInstance != null && !this.isSeeking) {
      this.isSeeking = true;
      this.shouldPlayAtEndOfSeek = this.state.shouldPlay;
      this.playbackInstance.pauseAsync();
    }
  };

  _onSeekSliderSlidingComplete = async (value) => {
    if (this.playbackInstance != null) {
      this.isSeeking = false;
      const seekPosition = value * this.state.playbackInstanceDuration;
      if (this.shouldPlayAtEndOfSeek) {
        this.playbackInstance.playFromPositionAsync(seekPosition);
      } else {
        this.playbackInstance.setPositionAsync(seekPosition);
      }
    }
  };

  _getSeekSliderPosition() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return (
        this.state.playbackInstancePosition /
        this.state.playbackInstanceDuration
      );
    }
    return 0;
  }

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = (number) => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  _getTimestamp() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return `${this._getMMSSFromMillis(
        this.state.playbackInstancePosition
      )}                                                                   ${this._getMMSSFromMillis(
        this.state.playbackInstanceDuration
      )}`;
    }
    return "";
  }

  _getSeekSliderPosition() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return (
        this.state.playbackInstancePosition /
        this.state.playbackInstanceDuration
      );
    }
    return 0;
  }

  _getMMSSFromMillis(millis) {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    const padWithZero = (number) => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return padWithZero(minutes) + ":" + padWithZero(seconds);
  }

  // _getTimestamp() {
  //   if (
  //     this.playbackInstance != null &&
  //     this.state.playbackInstancePosition != null &&
  //     this.state.playbackInstanceDuration != null
  //   ) {
  //     return `${this._getMMSSFromMillis(
  //       this.state.playbackInstancePosition
  //     )}
  //       ${this._getMMSSFromMillis(this.state.playbackInstanceDuration)}`;
  //   }
  //   //   return "";
  // }

  _getTimeStart() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return `${this._getMMSSFromMillis(this.state.playbackInstancePosition)}`;
    }
    return "";
  }
  _getTimeEnd() {
    if (
      this.playbackInstance != null &&
      this.state.playbackInstancePosition != null &&
      this.state.playbackInstanceDuration != null
    ) {
      return `${this._getMMSSFromMillis(this.state.playbackInstanceDuration)}`;
    }
    return "";
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: "#ffff",
            paddingVertical: hp("2%"),
            // backgroundColor: "red",
            // marginTop:hp('0.5%')
            // position:'relative',
            // zIndex: 1,
            // marginTop:-50,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {this.state.showValumeBox && (
              <>
                <View
                  style={{
                    marginHorizontal: 10,
                    backgroundColor: "#fff",
                    position: "absolute",
                    zIndex: 5,
                    width: wp("95%"),
                    // borderWidth: 1,
                    // borderColor: "gray",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 15,
                    marginTop: -12,
                    alignContent: "center",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                  }}
                >
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ marginLeft: 20 }}>Loop</Text>
                    <View
                      style={{
                        marginTop: 10,
                        marginLeft: 5,
                        flexDirection: "row",
                      }}
                    >
                      <TouchableOpacity>
                        <ImageBackground
                          style={{
                            width: wp("5.5%"),
                            height: hp("3%"),
                            borderRadius: "100% ",
                          }}
                          source={require("../../../assets/plusImage.png")}
                        >
                          <Text style={{ textAlign: "center" }}>+</Text>
                        </ImageBackground>
                      </TouchableOpacity>
                      <Text style={{ paddingHorizontal: 10 }}>12</Text>
                      <TouchableOpacity>
                        <ImageBackground
                          style={{ width: wp("5.5%"), height: hp("3%") }}
                          source={require("../../../assets/plusImage.png")}
                        >
                          <Text style={{ textAlign: "center" }}>-</Text>
                        </ImageBackground>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <Text style={{ marginLeft: 40 }}>volume</Text>
                    <Slider
                      style={{
                        width: wp("50%"),
                        marginTop: 15,
                        height: hp("2%"),
                      }}
                      minimumValue={0}
                      maximumValue={1}
                      minimumTrackTintColor="blue"
                      maximumTrackTintColor="#000000"
                      value={this._getSeekSliderPosition()}
                      onValueChange={this._onSeekSliderValueChange}
                      onSlidingComplete={this._onSeekSliderSlidingComplete}
                      disabled={this.state.isLoading}
                    />
                  </View>
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ marginRight: 20 }}>Seek</Text>
                    <Text style={{ marginRight: 20, marginTop: 10 }}>0.5x</Text>
                  </View>
                </View>
              </>
            )}
            <Slider
              style={{ width: wp("100%"), height: hp("4%"), marginBottom: 2 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="blue"
              maximumTrackTintColor="#000000"
              value={this._getSeekSliderPosition()}
              onValueChange={this._onSeekSliderValueChange}
              onSlidingComplete={this._onSeekSliderSlidingComplete}
              disabled={this.state.isLoading}
            />
          </View>

          <View style={styles.detailsContainer}>
            <View
              style={{
                // backgroundColor: "red",
                // width: "90%",
                alignSelf: "center",
                // overflow: "hidden",
                height: "60%",
                // top: 3,
                flexDirection: "row",
              }}
            >
              <Text style={[styles.text, { marginRight: 20 }]}>
                {this._getTimeStart()}
              </Text>
              <Text style={styles.text}>{this.state.playbackInstanceName}</Text>
              <Text style={[styles.text, { marginLeft: 20 }]}>
                {this._getTimeEnd()}
              </Text>
            </View>
          </View>

          {/* <View style={styles.detailsContainer}>
            <View
              style={{
                // backgroundColor: "red",
                width: "70%",
                alignSelf: "center",
                // overflow: "hidden",
                height: "60%",
                top: 3,
              }}
            >
              <Text style={styles.text}>{this.state.playbackInstanceName}</Text>
            </View>
            <View
              style={{
                // backgroundColor: "green",
                width: "100%",
                alignSelf: "center",
                overflow: "hidden",
                // marginBottom: -50,
                bottom: 20,
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.text}>
                {this.state.isBuffering
                  ? BUFFERING_STRING
                  : this._getTimestamp()}
              </Text>
            </View>
            </View> */}

          {/* .............Arabic............ */}
          {/* <View style={styles.detailsContainer}>
            <View
              style={{
                backgroundColor: "red",
                width: "70%",
                alignSelf: "center",
                // overflow: "hidden",
                height: "60%",
                top: 3,
              }}
            >
              <Text style={styles.text}>{this.state.playbackInstanceName}</Text>
            </View>
            <View
              style={{
                // backgroundColor: "green",
                width: "90%",
                alignSelf: "center",
                overflow: "hidden",
                // marginBottom: -50,
                bottom: 20,
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.text}>
                {this.state.isBuffering
                  ? BUFFERING_STRING
                  : this._getTimestamp()}
              </Text>
            </View>
          
          </View> */}
          {/* ............................Player.............. */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                // backgroundColor: "red",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity style={{ marginHorizontal: wp("3%") }}>
                <View style={{ padding: 7 }}>
                  <FontAwesome5 name="book-open" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 3 }}>
                <View style={{ padding: 7 }}>
                  <AntDesign name="stepbackward" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginHorizontal: wp("3%") }}
                onPress={this._onBackPressed}
              >
                <View style={{ padding: 5 }}>
                  <AntDesign name="banckward" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginHorizontal: wp("3%") }}
                onPress={this._onPlayPausePressed}
              >
                <View style={{ padding: 3 }}>
                  {this.state.isPlaying ? (
                    <AntDesign name="pausecircleo" size={40} />
                  ) : (
                    <AntDesign name="playcircleo" size={40} />
                  )}
                  {/* <AntDesign name="playcircleo" size={40} /> */}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginHorizontal: wp("3%") }}
                onPress={this._onForwardPressed}
              >
                <View style={{ padding: 5 }}>
                  <AntDesign name="forward" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 3 }}>
                <View style={{ padding: 5 }}>
                  <AntDesign name="stepforward" size={25} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleVolumeBox}
                style={{ marginHorizontal: wp("3%") }}
              >
                <View style={{ padding: 5 }}>
                  <Fontisto name="headphone" size={35} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* End Aracbic */}

          {/* ................. */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    height: 30,
    alignSelf: "center",
    // flexDirection: "row",
    // marginTop: 40,
    // backgroundColor: "yellow",
    // alignItems: "center",
    // bottom: 5,
    width: wp("70%"),
  },
  text: {
    fontSize: 15,
    minHeight: 15,
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#ffffff",
  },
  artist: {
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
    textTransform: "capitalize",
  },
  // container: {
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
  //   // height: height,
  //   // maxHeight: 600,
  // },
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  albumCover: {
    width: 250,
    height: 250,
  },
  trackInfo: {
    padding: 40,
    backgroundColor: "#fff",
  },
  trackInfoText: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "#550088",
  },
  largeText: {
    fontSize: 22,
  },
  smallText: {
    fontSize: 16,
  },
  control: {
    margin: 20,
  },
  controls: {
    flexDirection: "row",
  },
});
