/**
 * @format
 * Navigation manager for app
 */

import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {useSelector} from 'react-redux';

// import {Loader} from '../global';
import {navigationRef} from './navigation-service';
import {RoutesSection} from '@app/constants';
import {selectActiveSection} from '@app/modules/common';
import {AppBootstrapGate} from '@app/modules/app-bootstrap';
import {AuthSection} from './auth-section';
import {MainSection} from './main-section';

function NavigationRouter({restored}) {
  const activeSection = useSelector(selectActiveSection);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="#FFBC13"
        translucent
      />

      <NavigationContainer ref={navigationRef}>
        <AppBootstrapGate restored={restored}>
          {activeSection === RoutesSection.MainSection ? (
            <>
              <MainSection />
            </>
          ) : (
            <AuthSection />
          )}
        </AppBootstrapGate>
        {/* <Loader /> */}
        <FlashMessage
          position="top"
          color={'red'}
          hideStatusBar
          duration={5000}
        />
      </NavigationContainer>
    </>
  );
}

export {NavigationRouter};
