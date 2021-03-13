# Radio

> Style individual form radio controls and utilize common layouts.

# Variants

> - Default, Inactive

## Default

```jsx
<React.Fragment>
  <Radio name={name} onChange={action('onChange-white')} text="White" />
  <Radio name={name} isChecked={true} onChange={action('onChange-black')} text="Black" />
</React.Fragment>
```

## Inactive

```jsx
<React.Fragment>
  <Radio name={name} onChange={action('onChange-white')} text="White" state={radioState.inactive} />
  <Radio name={name} isChecked={true} onChange={action('onChange-black')} text="Black" state={radioState.inactive} />
</React.Fragment>
```
