/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

export class KeysValueConverter {
    public toView(obj) {
        return _.keys(obj);
    }
}
