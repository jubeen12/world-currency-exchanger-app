
import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
    handleThemePress = () => {
      console.log('Theme Pres');
    }

    handleSitePress = () => {
      console.log('site press');
    }

    render() {
      return (
        <ScrollView>
          <StatusBar translucent={false} barStyle="dark-content" />
          <ListItem
            text="Themes"
            onPress={this.handleThemePress}
            customIcon={
                <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
                  }
          />
          <Separator />
          <ListItem
            text="Fixer.io"
            onPress={this.handleSitePress}
            customIcon={
              <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
                  }
          />
        </ScrollView>
      );
    }
}

export default Options;
