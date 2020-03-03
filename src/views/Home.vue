<template>
  <div class="home">
    <div class="style__page">
      <div class="w-screen p-12 text-left md:w-1/2">
        <h1>Buttons</h1>
        <p>
          Whan applying a button or buttons be mindfull that your button style
          matches the button's page hierarchy.<br />
          The button styles are as follows:
        </p>
        <ul class="mb-2 list-disc list-inside">
          <li>
            <strong>Primary:</strong> Bold, high contrasting background. Used when
            this action is the main page action.
          </li>
          <li><strong>Secondary:</strong> Clear but not as bold.</li>
          <li>
            <strong>Tertiary: </strong> These are for actions you wish to be
            identified but you do not wish command too much attention.
          </li>
        </ul>
        <h6>
          All buttons, unless links, should have uppercase labels.
        </h6>
      </div>
      <div class="w-screen h-full p-12 md:w-1/2">
        <div class="flex flex-col items-center justify-center">
          <h4 class="mb-2">
            Primary Buttons
          </h4>
          <button class="w-full mb-2 btn btn-primary md:w-6/12 lg:w-4/12">
            primary button
          </button>
          <button class="w-full mb-2 btn btn-secondary md:w-6/12 lg:w-4/12">
            secondary button
          </button>
          <button class="w-full mb-2 btn btn-danger md:w-6/12 lg:w-4/12">
            danger button
          </button>
          <button class="w-full mb-2 btn btn-light md:w-6/12 lg:w-4/12">
            light button
          </button>

          <div class="mb-5"></div>

          <h4 class="mb-2">
            Secondary Buttons
          </h4>
          <button class="w-full mb-2 btn btn-primary-outline md:w-6/12 lg:w-4/12">
            primary button
          </button>
          <button
            class="w-full mb-2 btn btn-secondary-outline md:w-6/12 lg:w-4/12"
          >
            secondary button
          </button>
          <button class="w-full mb-2 btn btn-danger-outline md:w-6/12 lg:w-4/12">
            danger button
          </button>
          <button class="w-full mb-2 btn btn-light-outline md:w-6/12 lg:w-4/12">
            light button
          </button>

          <div class="mb-5"></div>

          <h4 class="mb-2">
            Tertiary Buttons
          </h4>
          <button
            class="w-full mb-2 btn btn-flat btn-primary md:w-6/12 lg:w-4/12"
          >
            primary button
          </button>
          <button
            class="w-full mb-2 btn btn-flat btn-secondary md:w-6/12 lg:w-4/12"
          >
            secondary button
          </button>
          <button class="w-full mb-2 btn btn-flat btn-danger md:w-6/12 lg:w-4/12">
            danger button
          </button>

          <!-- Default vue component -->
          <BaseButton />

          <Button class="w-full mb-2 btn btn-link md:w-6/12 lg:w-4/12">
            link button
          </Button>
        </div>
      </div>
      <div class="w-screen p-12 text-left md:w-1/2">
        <h2>Alerts</h2>
      </div>
      <div class="w-screen h-full p-12 md:w-1/2">
        <div class="flex flex-col justify-center">
          <Alert title="Oops..." text="Something bad happened." :show-close="true"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/buttons/Button'
import Alert from '@/components/alerts/Alert'

export default {
  name: 'Welcome',
  components: {
    Button,
    Alert
  }
}
</script>
