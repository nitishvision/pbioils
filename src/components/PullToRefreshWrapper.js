import React, {useCallback} from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import {COLOR} from '../config/AppStyling';

const PullToRefreshWrapper = ({
  children,
  onRefresh,
  refreshing,
  style,
  contentContainerStyle,
  ...props
}) => {
  const handleRefresh = useCallback(() => {
    if (onRefresh) {
      onRefresh();
    }
  }, [onRefresh]);

  return (
    <ScrollView
      style={[styles.container, style]}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          colors={[COLOR.PRIMARY]}
          tintColor={COLOR.PRIMARY}
          title="Pull to refresh"
          titleColor={COLOR.PRIMARY}
        />
      }
      showsVerticalScrollIndicator={false}
      {...props}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default PullToRefreshWrapper;
