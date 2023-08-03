# C-like Long Expression Formatter

Test with:

```c++
(int32x4)shift_left(int32x4(x4((int16)1)), int32x4(slice_vectors(concat_vectors(slice_vectors((int16x64)shift_right((int16x64)t94.widened.sum_exp_row.s1.r6$x.r23, x64((uint16)beta_shift)), 0, 1, 8) + x8((int16)15), slice_vectors((int16x64)shift_right((int16x64)t94.widened.sum_exp_row.s1.r6$x.r23, x64((uint16)beta_shift)), 8, 1, 8) + x8((int16)15), slice_vectors((int16x64)shift_right((int16x64)t94.widened.sum_exp_row.s1.r6$x.r23, x64((uint16)beta_shift)), 16, 1, 8) + x8((int16)15), slice_vectors((int16x64)shift_right((int16x64)t94.widened.sum_exp_row.s1.r6$x.r23, x64((uint16)beta_shift)), 24, 1, 8) + x8((int16)15), slice_vectors((int16x64)shift_right((int16x64)t94.widened.sum_exp_row.s1.r6$x.r23, x64((uint16)beta_shift)), 32, 1, 8) + x8((int16)15), slice_vectors((int16x64)shift_right((int16x64)t94.widened.sum_exp_row.s1.r6$x.r23, x64((uint16)beta_shift)), 40, 1, 8) + x8((int16)15), slice_vectors((int16x64)shift_right((int16x64)t94.widened.sum_exp_row.s1.r6$x.r23, x64((uint16)beta_shift)), 48, 1, 8) + x8((int16)15), slice_vectors((int16x64)shift_right((int16x64)t94.widened.sum_exp_row.s1.r6$x.r23, x64((uint16)beta_shift)), 56, 1, 8) + x8((int16)15)), 0, 1, 4)))
```

Only insert newline and indentation when parenthesis is complex inside.

Copy back to your editor to see syntax highlight ^_^
