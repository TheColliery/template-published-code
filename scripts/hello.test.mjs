import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './hello.mjs';
import { sign } from './branchy.mjs';

test('greet', () => { assert.equal(greet('world'), 'hello world'); });
test('sign positive only', () => { assert.equal(sign(5), 1); });
