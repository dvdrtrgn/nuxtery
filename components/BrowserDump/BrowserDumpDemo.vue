<template>
    <BrowserDump label="BrowserDump Demo">
        <p>
            The code also demonstrates the data-provider pattern. <br />
            The slot in the child can pass data up to the slot region in the parent.
        </p>
        <BrowserDump>
            <template #default="data">
                <pre>handle: {{ data.handle }}</pre>
                <pre>{{ data }}</pre>
            </template>
        </BrowserDump>

        <BrowserDump label="toggle (with Label)">
            <template #default="data">
                LABEL ALLOWS STORAGE

                <pre>{{ data }}</pre>
                <pre>handle: {{ data.handle }}</pre>
            </template>
        </BrowserDump>
    </BrowserDump>
</template>
