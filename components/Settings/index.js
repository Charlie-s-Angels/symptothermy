import React from 'react';

const Settings = () => {
  return (
    <View style={styles.container}>
    <Button
        title={I18n.t('settings.profil')}
        onPress={() => Alert.alert('Button pressed')}
      />
      <Button
        title={I18n.t('settings.notifications')}
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
  );
};
export default Settings;
