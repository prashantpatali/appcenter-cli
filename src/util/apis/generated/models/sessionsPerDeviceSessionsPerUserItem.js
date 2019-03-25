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

/**
 * Class representing a SessionsPerDeviceSessionsPerUserItem.
 */
class SessionsPerDeviceSessionsPerUserItem {
  /**
   * Create a SessionsPerDeviceSessionsPerUserItem.
   * @property {string} [datetime] the ISO 8601 datetime
   * @property {number} [count] count
   */
  constructor() {
  }

  /**
   * Defines the metadata of SessionsPerDeviceSessionsPerUserItem
   *
   * @returns {object} metadata of SessionsPerDeviceSessionsPerUserItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SessionsPerDevice_sessions_per_userItem',
      type: {
        name: 'Composite',
        className: 'SessionsPerDeviceSessionsPerUserItem',
        modelProperties: {
          datetime: {
            required: false,
            serializedName: 'datetime',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = SessionsPerDeviceSessionsPerUserItem;
