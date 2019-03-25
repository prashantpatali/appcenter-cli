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
 * List of notifications
 *
 */
class NotificationsListResult {
  /**
   * Create a NotificationsListResult.
   * @property {array} values
   * @property {number} [total] the total count of notifications
   * @property {string} [nextLink]
   */
  constructor() {
  }

  /**
   * Defines the metadata of NotificationsListResult
   *
   * @returns {object} metadata of NotificationsListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NotificationsListResult',
      type: {
        name: 'Composite',
        className: 'NotificationsListResult',
        modelProperties: {
          values: {
            required: true,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NotificationOverviewResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'NotificationOverviewResult'
                  }
              }
            }
          },
          total: {
            required: false,
            serializedName: 'total',
            type: {
              name: 'Number'
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NotificationsListResult;
