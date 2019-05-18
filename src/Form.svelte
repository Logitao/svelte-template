<script>
  import * as yup from "yup";
  import ErrorMessage from "./common/ErrorMessage.svelte";
  export let match;

  const schema = yup.object({
    name: yup.string().required("Digite o nome"),
    lastname: yup.string().required("Digite o sobrenome"),
    age: yup.number().required("Digite a idade")
  });

  let values = {
    name: "test",
    lastname: "last",
    age: 12
  };
  let errors = {};

  $: {
    let validationErrors = [];
    let formErrors = {};
    errors = {};
    schema.validate(values, { abortEarly: false }).catch(e => {
      validationErrors = e.inner.map(error => ({
        [error.path]: error.message
      }));

      validationErrors.forEach(element => {
        formErrors = { ...formErrors, ...element };
      });
      errors = formErrors;
    });
  }
</script>

<style>

</style>

<input type="text" name="name" bind:value={values.name} />
<ErrorMessage {errors} from="name" />
<br />
<input type="text" name="lastname" bind:value={values.lastname} />
<ErrorMessage {errors} from="lastname" />
<br />
<input type="number" name="age" bind:value={values.age} />
<ErrorMessage {errors} from="age" />
<br />

<pre>{JSON.stringify(values, null, 2)}</pre>
<pre style="color: red;">{JSON.stringify(errors, null, 2)}</pre>
