<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="getHots">
      <el-tab-pane label="全部" name="0">
        <el-row style="display: flex; justify-content: center; flex-wrap: wrap">
          <el-col
            :span="4"
            v-for="item in data"
            :key="item.id"
            style="margin: 10px 10px"
          >
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="item.album.blurPicUrl" class="image" />
              <div style="padding: 14px">
                <span
                  style="
                    display: inline-block;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 80%;
                  "
                >
                  <a href="#" :title="item.name">{{ item.name }}</a>
                </span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.artists[0].name }}</time>
                  <el-button
                    type="text"
                    class="button"
                    @click="getMusicUrl(item.id)"
                    >播放</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="华语" name="7">
        <el-row style="display: flex; justify-content: center; flex-wrap: wrap">
          <el-col
            :span="4"
            v-for="item in data"
            :key="item.id"
            style="margin: 10px 10px"
          >
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="item.album.blurPicUrl" class="image" />
              <div style="padding: 14px">
                <span
                  style="
                    display: inline-block;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 80%;
                  "
                >
                  <a href="#" :title="item.name">{{ item.name }}</a>
                </span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.artists[0].name }}</time>
                  <el-button
                    type="text"
                    class="button"
                    @click="getMusicUrl(item.id)"
                    >播放</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="欧美" name="96">
        <el-row style="display: flex; justify-content: center; flex-wrap: wrap">
          <el-col
            :span="4"
            v-for="item in data"
            :key="item.id"
            style="margin: 10px 10px"
          >
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="item.album.blurPicUrl" class="image" />
              <div style="padding: 14px">
                <span
                  style="
                    display: inline-block;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 80%;
                  "
                >
                  <a href="#" :title="item.name">{{ item.name }}</a>
                </span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.artists[0].name }}</time>
                  <el-button
                    type="text"
                    class="button"
                    @click="getMusicUrl(item.id)"
                    >播放</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="日本" name="8">
        <el-row style="display: flex; justify-content: center; flex-wrap: wrap">
          <el-col
            :span="4"
            v-for="item in data"
            :key="item.id"
            style="margin: 10px 10px"
          >
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img :src="item.album.blurPicUrl" class="image" />
              <div style="padding: 14px">
                <span
                  style="
                    display: inline-block;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 80%;
                  "
                >
                  <a href="#" :title="item.name">{{ item.name }}</a>
                </span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.artists[0].name }}</time>
                  <el-button
                    type="text"
                    class="button"
                    @click="getMusicUrl(item.id)"
                    >播放</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        @current-change="getPage"
      >
      </el-pagination>
    </el-tabs>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$axios.get("/top/song?type=0").then((res) => {
      this.data0 = res.data.data;
      this.data = this.data0.slice(this.page * 10 - 10, this.page * 10);
    });
  },
  data() {
    return {
      activeName: "0",
      hotSongs: 0,
      data: [],
      data0: [],
      page: 1,
    };
  },
  methods: {
    getHots(tab) {
      console.log(tab);
      this.$axios.get("/top/song?type=" + tab.name).then((res) => {
        console.log(res);
        this.data0 = res.data.data;
        this.data = this.data0.slice(this.page * 10 - 10, this.page * 10);
      });
    },
    getPage(val) {
      this.page = val;
      this.data = this.data0.slice(this.page * 10 - 10, this.page * 10);
    },
    getMusicUrl(url) {
      this.$axios.get("/song/url?id=" + url).then((res) => {
        this.$store.commit("playMusic", res.data.data[0].url);
        console.log(res.data.data[0].url);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>