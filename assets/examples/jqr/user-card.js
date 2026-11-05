JQR.register('user-card', {
  props: { userId: 1 },
  template: `
    <div class="user-card">
      <strong>User #<span $:text="$props.userId"></span></strong>
      <p>Profile loaded!</p>
    </div>
  `
});
