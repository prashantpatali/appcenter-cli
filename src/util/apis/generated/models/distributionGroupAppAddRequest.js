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
 * Class representing a DistributionGroupAppAddRequest.
 */
class DistributionGroupAppAddRequest {
  /**
   * Create a DistributionGroupAppAddRequest.
   * @property {array} [apps] The list of apps to add to distribution group
   */
  constructor() {
  }

  /**
   * Defines the metadata of DistributionGroupAppAddRequest
   *
   * @returns {object} metadata of DistributionGroupAppAddRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DistributionGroupAppAddRequest',
      type: {
        name: 'Composite',
        className: 'DistributionGroupAppAddRequest',
        modelProperties: {
          apps: {
            required: false,
            serializedName: 'apps',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AppAddRequestElementType',
                  type: {
                    name: 'Composite',
                    className: 'AppAddRequest'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DistributionGroupAppAddRequest;
