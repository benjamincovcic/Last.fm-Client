import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import TrackDetails from '../app/TrackDetails/components/index';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <TrackDetails></TrackDetails>;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
