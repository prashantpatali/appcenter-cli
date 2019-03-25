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
 * Number property.
 *
 * @extends models['CustomProperty']
 */
class NumberProperty extends models['CustomProperty'] {
  /**
   * Create a NumberProperty.
   * @property {number} value Number property value.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NumberProperty
   *
   * @returns {object} metadata of NumberProperty
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'number',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'CustomProperty',
        className: 'NumberProperty',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            constraints: {
              MaxLength: 128,
              Pattern: /^[a-zA-Z][a-zA-Z0-9\-_]*$/
            },
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = NumberProperty;
