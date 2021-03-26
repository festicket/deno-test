import { assertEquals} from 'https://deno.land/std@0.91.0/testing/asserts.ts';
import { add } from './utils.ts';

Deno.test('hello', () => {
    assertEquals(add(1,2), 3);
});