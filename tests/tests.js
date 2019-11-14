exports.defineAutoTests = function() {

  describe('PermissionScope (window.PermissionScope)', function () {
    var fns = [
      'init',
      'addNotificationsPermission',
      'addLocationInUsePermission',
      'addLocationAlwaysPermission',
      'addContactsPermission',
      'addEventsPermission',
      'addMicrophonePermission',
      'addCameraPermission',
      'addPhotosPermission',
      'addRemindersPermission',
      'addBluetoothPermission',
      'addMotionPermission',
      'requestNotificationsPermission',
      'requestLocationInUsePermission',
      'requestLocationAlwaysPermission',
      'requestContactsPermission',
      'requestEventsPermission',
      'requestMicrophonePermission',
      'requestCameraPermission',
      'requestPhotosPermission',
      'requestRemindersPermission',
      'requestBluetoothPermission',
      'requestMotionPermission',
      'show'
    ];

    it('should exist', function() {
      expect(PermissionScope).toBeDefined();
    });

    fns.forEach(function(fn) {
      it('should contain a ' + fn + ' function', function () {
        expect(typeof PermissionScope[fn]).toBeDefined();
        expect(typeof PermissionScope[fn] === 'function').toBe(true);
      });
    })
  });
};

exports.defineManualTests = function(contentEl, createActionButton) {
  createActionButton('show custom dialog', function() {
    PermissionScope.init({
      headerLabel: 'Hello',
      bodyLabel: 'Before you get started',
      closeButtonTextColor: '#cccccc',
      closeButtonTitle: 'Return',
      permissionButtonTextColor: '#30ab7d',
      permissionButtonBorderColor: '#30ab7d',
      closeOffset: '{-200, 0}',
      authorizedButtonColor: '#cccccc',
      unauthorizedButtonColor: '#c2262d',
      permissionButtonCornerRadius: '20',
      permissionLabelColor: '#ff5500',
      permissionButtonΒorderWidth: '5',
      deniedCancelActionTitle: 'Cancel',
      deniedDefaultActionTitle: 'Settings',
      deniedAlertTitle: 'Permission',
      deniedAlertMessage: 'Please enable all the permissions',
      disabledCancelActionTitle: 'Cancel',
      disabledDefaultActionTitle: 'Settings',
    });

    PermissionScope.addBluetoothPermission('Please enable access to your Bluetooth');
    PermissionScope.addCameraPermission('Please enable access to your Camera');
    PermissionScope.addPhotosPermission('Please enable access to your Photos');

    PermissionScope.show();
  });

  createActionButton('show default dialog', function() {
    PermissionScope.init();

    PermissionScope.addNotificationsPermission('In order to send you notifications');
    PermissionScope.addMicrophonePermission('In order to access your voice');

    PermissionScope.show();
  });

  createActionButton('Request Microphone Permission', function() {
    PermissionScope.init({
      deniedDefaultActionTitle: 'Settings',
    });
    PermissionScope.requestMicrophonePermission();
  });

  createActionButton('Request Notifications Permission', function() {
    PermissionScope.init();
    PermissionScope.requestNotificationsPermission();
  });
};
