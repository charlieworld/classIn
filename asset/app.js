new Vue({
  el: '#app',
  data: function () {
    return {
      window: {
        width: 0,
        height: 0
      },
      mobileWidth: 768,
      mFilterVisible: false,
      mOrderVisible: false,
      mSearchVisible: false,
      sourceData: {},
      mainData: [],
      currentData: [],
      searchVal: '',
      currentPage: 'review',
      currentFilter: '',
      currentOrder: 'time',
      loading: true,
      ifMore: true,
      pageNum:1,
      pageLimit: 20,
      filters: [
        {title: '所有評價', action:'newest', active: true},
        {title: '人文通識評價', action:'humanities', active: false},
        {title: '自然通識評價', action:'physic', active: false},
        {title: '社會通識評價', action:'social', active: false},
        {title: '歷史通識評價', action:'history', active: false},
        {title: '體育評價', action:'sports', active: false}
      ],
      orders: [
        {title: '推薦高至低', action:'recommend', active: false},
        {title: '作業低至高', action:'work', active: false},
        {title: '考試少至多', action:'exam', active: false},
        {title: '收穫高至低', action:'learned', active: false},
        {title: '有趣高至低', action:'fun', active: false},
        {title: '要求少至多', action:'request', active: false},
        {title: '時間新至舊', action:'time', active: false}
      ],
    }
  },
  created: function () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();

    let path = window.location.pathname;
    path = path.split('/')[1];
    if (path === 'view')
    {
      this.parseURLSearch();
      this.geData();
    } else {
      this.loading = false;
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    mobile() {
      if ( this.window.width <= this.mobileWidth ) {
        return true;
      } else {
        return false;
      }
    },
    dialogClose(done) {
      done();
    },
    geData() {
      axios({
        method: 'get',
        url: '/data/data.json',
      })
      .then((response) => {
        this.sourceData = response.data;
        for (const i in this.sourceData.Header) {
          this.sourceData.Header[i] = this.sourceData.Header[i].replace(/？/g, '')
        }
        this.doSearch();
        //this.mainData = this.sourceData.Data;
        //this.onOrder(this.currentOrder);
        //this.currentData = this.mainData.slice(0,this.pageLimit);
        this.$message({
          showClose: true,
          center: true,
          message: '更新資料成功！',
        })
        this.loading = false;
        this.ifMore = true;
      })
      .catch((error) => {
        console.error(error)
        this.$message({
          message: error,
          type: 'error'
        })
      });
    },
    onPage(page){
      this.currentPage = page;
      for (const i in this.pages) {
        if (this.pages[i].action === page) {
          this.pages[i].active = true;
        } else {
          this.pages[i].active = false;
        }
      }
    },
    onFilter(option){
      for (const i in this.filters) {
        if (this.filters[i].action === option) {
          this.filters[i].active = true;
        } else {
          this.filters[i].active = false;
        }
      }
      switch (option){
        case 'newest':
          this.geData();
          break;
        case 'humanities':
          this.doFilter('人文');
          break;
        case 'physic':
          this.doFilter('自然');
          break;
        case 'social':
          this.doFilter('社會');
          break;
        case 'history':
          this.historyFilter();
          break;
        case 'sports':
          this.doFilter('體育');
          break;
      }
      this.currentFilter = option;
      //console.log('data length :',this.mainData.length);
    },
    doFilter(keyWord) {
      this.mainData = this.sourceData.Data.filter(data => data.classOpen.indexOf(keyWord) >= 0 );
      this.onOrder(this.currentOrder);
      this.currentData = this.mainData.slice(0,this.pageLimit);
    },
    historyFilter() {
      this.mainData = this.sourceData.Data.filter(data => data.ifHistory === '是' );
      this.onOrder(this.currentOrder);
      this.currentData = this.mainData.slice(0,this.pageLimit);
    },
    onOrder(option){
      for (const i in this.orders) {
        if (this.orders[i].action === option) {
          this.orders[i].active = true;
        } else {
          this.orders[i].active = false;
        }
      }
      this.doOrder(option);
      this.currentOrder = option;
      this.currentData = this.mainData.slice(0,this.pageLimit);
    },
    doOrder(option) {
      this.mainData = this.mainData.sort((a, b) => {
        let itemA = '';
        let itemB = '';
        switch (option) {
          case 'recommend':
            itemA = a.lv_recommend;
            itemB = b.lv_recommend
            return itemB - itemA;
            break;
          case 'work':
            itemA = a.lvWork;
            itemB = b.lvWork
            return itemA - itemB;
            break;
          case 'exam':
            itemA = a.lvExamAmount;
            itemB = b.lvExamAmount
            return itemA - itemB;
            break;
          case 'learned':
            itemA = a.lvLearned;
            itemB = b.lvLearned
            return itemB - itemA;
            break;
          case 'fun':
            itemA = a.lvFun;
            itemB = b.lvFun
            return itemB - itemA;
            break;
          case 'request':
            itemA = a.lvRequest;
            itemB = b.lvRequest
            return itemA - itemB;
            break;  
          default:
            itemA = a.createDate;
            itemB = b.createDate
            if (itemA > itemB) {
              return -1;
            }
            if (itemA < itemB) {
              return 1;
            }
            return 0;
            break;
        }
      });
    },
    onSearch(){
      this.updateURLSearch();
      //this.doSearch();
    },
    onSearchM(){
      this.mSearchVisible = false;
      this.onSearch();
    },
    doSearch(){
      if (this.searchVal === '') {
        this.mainData = this.sourceData.Data;
        this.onOrder(this.currentOrder);
        this.currentData = this.mainData.slice(0,this.pageLimit);
      } else {
        const textArr =  this.searchVal.split(" ");
        let cake = [];
        for (const target of textArr) {
          cake = cake.concat(this.sourceData.Data.filter(data => data.index === parseInt(target)));
          cake = cake.concat(this.sourceData.Data.filter(data => data.className.indexOf(target) >= 0 ));
          cake = cake.concat(this.sourceData.Data.filter(data => data.teaher.indexOf(target) >= 0 ));
        }
        if ( cake.length > 0) {
          let keys = [];
          let out = [];
          for (const c of cake) {
            if ( keys.indexOf(c.index) == -1) {
              out.push(c);
              keys.push(c.index)
            }
          }
          cake = out;
        }
        this.mainData = cake;
        this.onOrder(this.currentOrder);
        this.currentData = this.mainData.slice(0,this.pageLimit);
      }
    },
    more(){
      let now = this.pageNum*this.pageLimit;
      const end = now + this.pageLimit
      this.pageNum ++;
      const cake = this.mainData.slice(now, end);
      if ( cake.length > 0 ) {
        this.currentData = this.currentData.concat(cake);
      } else {
        this.ifMore = false;
      }

    },
    updateURLSearch() {
      let uri ='?search=';
      const textArr =  this.searchVal.split(" ")
      for( const item of textArr ) {
        uri += `${item},`
      }
      uri = uri.slice(0, -1);
      window.location.search = uri;
    },
    parseURLSearch() {
      let uri = window.location.href;
      uri = decodeURI(uri)
      uri = uri.split('?search=')[1];
      if (!uri || uri === undefined || uri == null)
      {
        uri = '';
      } else {
        uri = uri.replace(/,/g, ' ');
      }
      this.searchVal = uri;
    }
  }
})