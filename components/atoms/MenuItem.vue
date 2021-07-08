<template>
    <v-list-item
        :to="to"
        router
        exact
    >
        <v-list-item-action>
            <v-icon>{{ icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title v-text="title" />
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    props: [
        'to',
        'icon',
        'title',
    ],
}
</script>
