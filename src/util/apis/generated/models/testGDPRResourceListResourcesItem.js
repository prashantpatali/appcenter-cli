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
 * Class representing a TestGDPRResourceListResourcesItem.
 */
class TestGDPRResourceListResourcesItem {
  /**
   * Create a TestGDPRResourceListResourcesItem.
   * @property {string} [rel]
   * @property {string} [path]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestGDPRResourceListResourcesItem
   *
   * @returns {object} metadata of TestGDPRResourceListResourcesItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestGDPRResourceList_resourcesItem',
      type: {
        name: 'Composite',
        className: 'TestGDPRResourceListResourcesItem',
        modelProperties: {
          rel: {
            required: false,
            serializedName: 'rel',
            type: {
              name: 'String'
            }
          },
          path: {
            required: false,
            serializedName: 'path',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TestGDPRResourceListResourcesItem;
