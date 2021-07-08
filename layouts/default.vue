<template>
    <v-app dark>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="miniVariant"
            :clipped="clipped"
            fixed
            app
        >
            <v-list class="d-flex flex-column justify-space-between fill-height">
                <div>
                    <MenuItem
                        to="/"
                        icon="mdi-home-outline"
                        title="Home"
                    />
                    <v-divider/>
                    <MenuItem
                        v-for="(item, i) in items"
                        :key="i"
                        :to="item.to"
                        :icon="item.icon"
                        :title="item.title"
                    />
                </div>
                <div class="mt-auto">
                    <MenuItem
                        to="/account"
                        icon="mdi-account-outline"
                        title="Account"
                    />
                </div>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
            :clipped-left="clipped"
            fixed
            app
        >
            <v-app-bar-nav-icon @click.stop="miniVariant = !miniVariant" />
            <v-toolbar-title v-text="title" />
            <v-spacer/>
            <v-btn
                icon
                @click.stop="switchTcheme"
            >
                <v-icon>mdi-brightness-6</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import MenuItem from '@/components/atoms/MenuItem'

export default {
    components: {
        MenuItem,
    },
    data () {
        return {
            clipped: true,
            drawer: true,
            items: [
                {
                    icon: 'mdi-gift-outline', // https://materialdesignicons.com/
                    title: 'Donate',
                    to: '/donate'
                },
                {
                    icon: 'mdi-cart-outline',
                    title: 'Shop',
                    to: '/shop'
                },
                {
                    icon: 'mdi-credit-card-refresh-outline',
                    title: 'Subscription',
                    to: '/subscription'
                }
            ],
            miniVariant: true,
            title: 'Test'
        }
    },
    methods: {
        switchTcheme(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    }
}
</script>
