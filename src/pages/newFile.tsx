import Layout from '../layouts/Layout.astro';

<Fragment>
<Layout title="Form Builder - Alpinejs Examples">

<div class="flex flex-col items-center w-full">
<Container>
<h1 {...{ "x-data": "{ message: 'I ❤️ Alpine' }", "x-text": "message" }}></h1>
</Container>
</div>
</Layout>
</Fragment>;
