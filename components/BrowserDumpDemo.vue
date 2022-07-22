<template>
    <div dev-inset>
        <h1>Browser Dump Demo</h1>

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
    </div>
</template>
