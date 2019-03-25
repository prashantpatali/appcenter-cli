/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * New app release alerting event
 *
 * @extends models['AlertingEvent']
 */
class NewAppReleaseAlertingEvent extends models['AlertingEvent'] {
  /**
   * Create a NewAppReleaseAlertingEvent.
   * @property {array} [userIds] List of users who need to receive an email
   * notification. If this is not null, then only sending emails will be
   * triggered even if the event requires calling webhooks or doing other
   * actions.
   * @property {boolean} [disableWebhook] indicate whether notify via webhook
   * or not
   * @property {object} [appReleaseProperties] Properties of new application
   * release
   * @property {string} [appReleaseProperties.appName]
   * @property {string} [appReleaseProperties.appDisplayName]
   * @property {string} [appReleaseProperties.releaseId]
   * @property {string} [appReleaseProperties.platform]
   * @property {string} [appReleaseProperties.uploadedAt] Date and time in ISO
   * 8601 format
   * @property {string} [appReleaseProperties.fingerprint]
   * @property {string} [appReleaseProperties.releaseNotes]
   * @property {string} [appReleaseProperties.version]
   * @property {string} [appReleaseProperties.shortVersion]
   * @property {string} [appReleaseProperties.minOs]
   * @property {boolean} [appReleaseProperties.mandatoryUpdate]
   * @property {number} [appReleaseProperties.size]
   * @property {string} [appReleaseProperties.provisioningProfileName]
   * @property {string} [appReleaseProperties.provisioningProfileType]
   * @property {string} [appReleaseProperties.bundleIdentifier]
   * @property {string} [appReleaseProperties.installLink]
   * @property {string} [appReleaseProperties.iconLink]
   * @property {string} [appReleaseProperties.distributionGroupId]
   * @property {boolean} [appReleaseProperties.installable]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NewAppReleaseAlertingEvent
   *
   * @returns {object} metadata of NewAppReleaseAlertingEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NewAppReleaseAlertingEvent',
      type: {
        name: 'Composite',
        className: 'NewAppReleaseAlertingEvent',
        modelProperties: {
          eventTimestamp: {
            required: true,
            serializedName: 'event_timestamp',
            type: {
              name: 'String'
            }
          },
          eventId: {
            required: true,
            serializedName: 'event_id',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Object'
            }
          },
          userIds: {
            required: false,
            serializedName: 'user_ids',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          disableWebhook: {
            required: false,
            serializedName: 'disable_webhook',
            type: {
              name: 'Boolean'
            }
          },
          appReleaseProperties: {
            required: false,
            serializedName: 'app_release_properties',
            type: {
              name: 'Composite',
              className: 'NewAppReleaseAlertingEventAppReleaseProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = NewAppReleaseAlertingEvent;
