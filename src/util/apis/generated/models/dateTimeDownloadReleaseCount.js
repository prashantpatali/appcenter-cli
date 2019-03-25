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
 * Class representing a DateTimeDownloadReleaseCount.
 */
class DateTimeDownloadReleaseCount {
  /**
   * Create a DateTimeDownloadReleaseCount.
   * @property {string} [datetime] the ISO 8601 datetime
   * @property {number} [total]
   * @property {number} [unique]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DateTimeDownloadReleaseCount
   *
   * @returns {object} metadata of DateTimeDownloadReleaseCount
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DateTimeDownloadReleaseCount',
      type: {
        name: 'Composite',
        className: 'DateTimeDownloadReleaseCount',
        modelProperties: {
          datetime: {
            required: false,
            serializedName: 'datetime',
            type: {
              name: 'String'
            }
          },
          total: {
            required: false,
            serializedName: 'total',
            type: {
              name: 'Number'
            }
          },
          unique: {
            required: false,
            serializedName: 'unique',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DateTimeDownloadReleaseCount;
