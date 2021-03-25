import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { add } from './utils.ts';

Deno.test("hello world #1", () => {
    assertEquals(add(1, 2), 3);
  }); 