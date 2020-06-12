'use strict';

const chalk = require('chalk');
const processBackendNotificationRequest = require('@serverless/utils/process-backend-notification-request');

module.exports = notifications => {
  const notification = processBackendNotificationRequest(notifications);
  if (!notification) return false;
  const borderLength = 'Serverless: '.length + notification.message.length;
  process.stdout.write(
    `\n${'*'.repeat(borderLength)}\nServerless: ${chalk.yellow(notification.message)}\n${'*'.repeat(
      borderLength
    )}\n\n`
  );
  return true;
};
