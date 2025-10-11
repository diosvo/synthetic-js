import { counter, increment } from './counter.mjs';
import './diff-file.mjs';

// 📌 ES2015 modules act like singletons by default, meaning when a module is imported in multiple files, the module's state is shared and can be modified across those import.

increment();
increment();
console.log(counter); // -> 4
