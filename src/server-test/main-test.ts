
import {strict as assert} from 'assert';
import {Util} from "../server/main.js" ;

import * as bb from 'node-persist';



//import * as persistence from '../server/persistence.js';
import  {$tf, $T} from "../../lib/tfjs/tribefire.js"

describe('Main', function () {
  describe('statics', function () {
    it('camelcase works fine', function () {
      console.log($T != null);
      //console.log($tf);

      assert.equal(Util.camelcase("foo", "bar"), "fooBar");
    });
  });
});