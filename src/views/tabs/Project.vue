<template>
    <div>
        <div class="top-bar">
            <i class='bx bx-left-arrow-alt'></i>
            <p>Write</p>
        </div>

        <div class="tab-content">
            <div class="content-one">
                <h4>Header Settings</h4>
                <div class="header-div">
                    <div class="header-inputs">
                        <div class="header-input1">
                            <label for="">
                                <p>Main Keyword<span>*</span></p>
                                <span class="my-span">61/80</span>
                            </label>
                            <input type="text" name="" id="" v-model="mainkeyword">
                        </div>

                        <div class="header-input1">
                            <label for="">
                                <p>Title<span>*</span></p>
                                <span class="my-span">66/100</span>
                            </label>
                            <input type="text" name="" id="" v-model="mainkeyword">
                        </div>
                    </div>
                    <div class="header-btn">
                        <button>Regenerate Title</button>
                    </div>
                </div>
            </div>

            <!-- -->
            <div class="content-two">
                <h4>Core Settings</h4>
                <div class="core-div">
                    <div class="core-div1">
                        <div class="core-input1">
                            <label for="">Language</label>
                            <select name="" id="">
                                <option value="">English US</option>
                                <option value="">English US</option>
                                <option value="">English US</option>
                            </select>
                        </div>

                        <div class="core-input1">
                            <label for="">Tone of Voice</label>
                            <select name="" id="">
                                <option value="">Friendly</option>
                                <option value="">English US</option>
                                <option value="">English US</option>
                            </select>
                        </div>

                        <div class="core-input1">
                            <label for="">Point of View</label>
                            <select name="" id="">
                                <option value="">None</option>
                                <option value="">English US</option>
                                <option value="">English US</option>
                            </select>
                        </div>

                        <div class="core-input1">
                            <label for="">Target Country</label>
                            <select name="" id="">
                                <option value="">None</option>
                                <option value="">English US</option>
                                <option value="">English US</option>
                            </select>
                        </div>
                    </div>
                    <div class="core-div2">
                        <div class="article-div">
                            <label for="">Article Size</label>
                            <div>
                                <select name="" id="">
                                    <option value="">X-Small</option>
                                    <option value="">English US</option>
                                    <option value="">English US</option>
                                </select>
                                <div>
                                    <p>2400-3600 words, 9-12 headings</p>
                                </div>
                            </div>
                        </div>
                        <p class="article-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repudiandae dolorem aliquam maiores officiis vitae explicabo molestias provident aut repellendus necessitatibus fuga dignissimos perferendis harum temporibus, corrupti, illum dolorum.</p>
                        <div class="article-details">
                            <p class="detailsone">
                                <span>Details to include</span>
                                <i class='bx bx-info-circle' ></i>
                            </p>
                            <p class="detailstwo">Sample 1 | Sample 2 | Sample 3</p>
                        </div>
                        <div class="check-box">
                            <input type="checkbox" name="" id="">
                            <p>Intense mode: to each section, beyond just the entire article.</p>
                        </div>
                        <div class="text-area">
                            <textarea name="" id="" cols="30" rows="5" placeholder="e.g phone number as 267-267-2678"></textarea>
                        </div>
                    </div>
                </div>

            </div>

            <div class="content-three">
                <h4>Media Hub</h4>
                <div class="media-div1">
                    <div class="item-one">
                        <label for="">Ai Images</label>
                        <select name="" id="">
                            <option value="">None</option>
                            <option value="">None</option>
                            <option value="">None</option>
                        </select>
                    </div>

                    <div class="item-one">
                        <label for="">Ai Images</label>
                        <select name="" id="">
                            <option value="">None</option>
                            <option value="">None</option>
                            <option value="">None</option>
                        </select>
                    </div>

                    <div class="item-one">
                        <label for="">Ai Images</label>
                        <select name="" id="">
                            <option value="">None</option>
                            <option value="">None</option>
                            <option value="">None</option>
                        </select>
                    </div>

                    <div class="item-one">
                        <label for="">Ai Images</label>
                        <select name="" id="">
                            <option value="">None</option>
                            <option value="">None</option>
                            <option value="">None</option>
                        </select>
                    </div>

                    
                </div>
                <div class="media-check">
                    <input type="checkbox" name="" id="" checked>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem adipisicing elit. Repellat, autem.</p>
                </div>

                <div class="media-div1">
                    <div class="item-one">
                        <label for="">Ai Images</label>
                        <select name="" id="">
                            <option value="">None</option>
                            <option value="">None</option>
                            <option value="">None</option>
                        </select>
                    </div>

                    <div class="item-one">
                        <label for="">Ai Images</label>
                        <select name="" id="">
                            <option value="">None</option>
                            <option value="">None</option>
                            <option value="">None</option>
                        </select>
                    </div>

                    <div class="item-one">
                        <label for="">Ai Images</label>
                        <select name="" id="">
                            <option value="">None</option>
                            <option value="">None</option>
                            <option value="">None</option>
                        </select>
                    </div>

                    

                    
                </div>
                <div class="media-check">
                    <input type="checkbox" name="" id="" checked>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem adipisicing elit. Repellat, autem.</p>
                </div>
            </div>

            <div class="content-three">
                <h4>SEO</h4>
                <div class="media-div1">
                    <div class="item-one">
                        <label for="">SEO Score</label>
                        <select name="" id="">
                            <option value="">0 - 20%</option>
                            <option value="">0 - 20%</option>
                            <option value="">0 - 20%</option>
                        </select>
                    </div>

                    <div class="item-one">
                        <label for="">Keyword Density</label>
                        <select name="" id="">
                            <option value="">10 times</option>
                            <option value="">None</option>
                            <option value="">None</option>
                        </select>
                    </div>

                    <div class="item-one">
                        <label for="">Tags</label>
                        <select name="" id="">
                            <option value="">None</option>
                            <option value="">None</option>
                            <option value="">None</option>
                        </select>
                    </div>

                    

                    
                </div>
                <div class="media-check">
                    <input type="checkbox" name="" id="" checked>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem adipisicing elit. Repellat, autem.</p>
                </div>
            </div>

            <!--  -->

            <div class="content-four">
                <div class='keyword-div'>
                    <div>
                        <h4>Keyword to include in text</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque unde dolores quae ex itaque omnis eius eligendi voluptate dicta sed similique quibusdam.</p>
                    </div>
                    <button>NPL Keyword Generator</button>
                </div>
                <div class="keyword-div2">
                    <div class="keyword-items">
                        <p>what do dermatologist prescribe for skin whitening?</p>
                        <i class='bx bx-x'></i>
                    </div>
                    <div class="keyword-items">
                        <p>dermatologist prescribe</p>
                        <i class='bx bx-x'></i>
                    </div>
                    <div class="keyword-items">
                        <p>skin whitening treatment</p>
                        <i class='bx bx-x'></i>
                    </div>
                    <div class="keyword-items">
                        <p>dermatologist recommend skin whitening product</p>
                        <i class='bx bx-x'></i>
                    </div>
                    <div class="keyword-items">
                        <p>skin whitening cream</p>
                        <i class='bx bx-x'></i>
                    </div>
                    
                    
                </div>
                <div class="keyword-div3">
                    <div class="keyword-items">
                        <p>what do dermatologist prescribe for skin whitening?</p>
                        <i class='bx bx-x'></i>
                    </div>
                    <div class="keyword-items">
                        <p>dermatologist prescribe</p>
                        <i class='bx bx-x'></i>
                    </div>
                    <div class="keyword-items">
                        <p>skin whitening treatment</p>
                        <i class='bx bx-x'></i>
                    </div>
                    <div class="keyword-items">
                        <p>dermatologist recommend skin whitening product</p>
                        <i class='bx bx-x'></i>
                    </div>
                    
                </div>
                <p class="keyword-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.  quas repudiandae blanditiis omnis ex .</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";


const mainkeyword = ref('What do dermatologist prescribe  for skin whitening?')
</script>
<style lang="less" scoped>
    @import '../../assets/projectstyles.less';

    
</style>