/**
 * Navigation Service
 * @format
 */
import {createNavigationContainerRef} from '@react-navigation/native';

// Navigation container reference
const navigationRef = createNavigationContainerRef();

// Navigate to a route
function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// Go back from current screen to previous
function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export {navigationRef, navigate, goBack};
