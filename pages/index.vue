<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-card>
                <v-card-title class="headline">
                    Home
                </v-card-title>
                <v-card-text
                    v-if="this.$store.state.user"
                >
                    <p >Username: {{ this.$store.state.user.username }}</p>
                    <p >Email: {{ this.$store.state.user.email }}</p>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        @click="signIn"
                        color="primary"
                        v-if="!this.$store.state.user"
                    >
                        Sign In With Google
                    </v-btn>
                    <v-btn
                        @click="signOut"
                        color="primary"
                        v-if="this.$store.state.user"
                    >
                        Sign Out
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    methods: {
        async signIn(){
            try{
                const credential = await this.$auth.signInWithPopup(this.$googleAuthProvider);
                const { uid, email, displayName } = credential.user;
                this.$firestore.collection("users").doc(uid).set({
                    email: email,
                    username: displayName
                }, { merge: true });
            }catch(err){
                console.log("Popup error:", err);
            }
        },
        signOut(){
            this.$auth.signOut();
        },
    }
};
</script>