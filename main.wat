(module
  (func (result i32)
    (i32.const 420)
  )
  (func (param $passthrough i32) (result i32)
    local.get $passthrough
  )
  (func (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add
  )
  (export "helloWorld" (func 0))
  (export "passthrough" (func 1))
  (export "add" (func 2))
)