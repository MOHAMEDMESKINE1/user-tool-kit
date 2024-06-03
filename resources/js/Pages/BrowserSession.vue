<script setup>
import {ListGroup,Title,Text ,Badge,ListGroupItem ,ButtonLink} from 'vue-component-cua'

</script>

<template>
    <div class="px-6 lg:px-24 h-screen justify-center flex flex-col ">
            <!-- Trusted Browser  -->
            <div class="grid  grid-cols-1 lg:grid-cols-2 ">

                <div>
                    <Title type="h5" class="mb-3 font-bold" >Trusted Browser</Title>
                    <Text fontSize="sm" class="mb-3">Most Jetstream features can be customized via action classes. However, for security, Jetstream's browser session services.</Text>
                </div>
                <div>
                    <Text>Laravel Jetstream's security features are accessed by the user using the top-right user profile navigation dropdown menu. Within this dashboard, Jetstream scaffolds views that allow the user to view the browser sessions associated with their account. In addition, the user may "logout" browser sessions other than the one being used by the device they are currently using.</Text>
                    <div class="bg-white mt-5">
                        <ListGroup>
                            
                            <ListGroupItem>
                                <div class='flex  justify-between'>
                                    
                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">
                                            
                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>
                                        
                                    </div>
                                
                                    <!-- <Text fontSize="sm" class="text-error pt-1">
                                        Logout
                                    </Text> -->
                                    <ButtonLink color='error' >Logout</ButtonLink>

                                </div>
                            </ListGroupItem>
                            
                            <ListGroupItem>
                                <div class='flex  justify-between'>
                                    
                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">
                                            
                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>
                                        
                                    </div>
                                
                                    <ButtonLink color='error' >Logout</ButtonLink>
                                </div>
                            </ListGroupItem>
                            
                            <ListGroupItem>
                                <div class='flex  justify-between'>
                                    
                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">
                                            
                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>
                                        
                                    </div>
                                
                                    <ButtonLink color='error' >Logout</ButtonLink>
                                </div>
                            </ListGroupItem>

                        </ListGroup>
                    </div>
                </div>
           </div>
           <!-- sessions  -->
            <div class="grid grid-cols-1 lg:grid-cols-2 mt-12  ">

                <div class="">
                    <Title type="h5" class="mb-3 font-bold" >Mes Sessions</Title>
                    <Text fontSize="sm" class="mb-3" >Most Jetstream features can be customized via action classes. However, for security, Jetstream's browser session services.</Text>
                </div>
                <div>
                    <Text>Laravel Jetstream's security features are accessed by the user using the top-right user profile navigation dropdown menu. Within this dashboard, Jetstream scaffolds views that allow the user to view the browser sessions associated with their account. In addition, the user may "logout" browser sessions other than the one being used by the device they are currently using.</Text>
                    <div class="bg-white mt-5">
                        <ListGroup >
                            
                            <ListGroupItem>
                                <div class='flex  justify-between'>
                                    
                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">
                                            
                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>
                                        
                                    </div>
                                
                                    <ButtonLink color='error' >Logout</ButtonLink>
                                </div>
                            </ListGroupItem>
                            
                            <ListGroupItem>
                                <div class='flex  justify-between'>
                                    
                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">
                                            
                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>
                                        
                                    </div>
                                
                                    <ButtonLink color='error' >Logout</ButtonLink>
                                </div>
                            </ListGroupItem>
                            
                            <ListGroupItem >
                                <div class='flex  justify-between'>
                                    
                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">
                                            
                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>
                                        
                                    </div>
                                
                                    <ButtonLink color='error' >Logout</ButtonLink>
                                </div>
                            </ListGroupItem>

                        </ListGroup>
                    </div>
                </div>
           </div>
    </div>
</template>



<style lang="css" scoped>

</style>