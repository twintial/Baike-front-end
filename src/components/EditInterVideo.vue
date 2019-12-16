<template>
    <div class="row">
        <div class="small-12 small-centered columns">
            <div class="row">
                <div class="small-3 columns">
                    <div id="edit-panel">
                        <span id="chart-state-panel">
                            <div class="row">
                                <div class="small-3 columns">
                                    <div class="switch">
                                        <input class="switch-input" id="exampleSwitch" type="checkbox" name="chart-state" value="view">
                                        <label class="switch-paddle" for="exampleSwitch"></label>
                                    </div>
                                </div>
                                <div class="small-8 columns">
                                    <div>
                                        <p><font size="5">EDIT</font></p>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <label class="selected-node-group" style="display:none;">Node Video:</label>
                        <input type="text" id="selected-node" class="selected-node-group" disabled style="display:none;">

                        <label>Change Node Video:</label>
                        <!-- <select id="change" disabled>
                            <option value="one" class="option">one</option>
                            <option value="two" class="option">two</option>
                            <option value="three" class="option">three</option>
                        </select> -->
                        <select id="change" disabled>
                          <option id="blankop"></option>
                          <option v-for="(titleList, index) in titleList" :key="index">{{titleList}}</option>
                        </select>

                        <label>Change Node Plot:</label>
                        <input id="node-plot" type="text" disabled>

                        <label>Select New Video:</label>
                        <!-- <select id="select" disabled>
                            <option value="one" class="option">one</option>
                            <option value="two" class="option">two</option>
                            <option value="three" class="option">three</option>
                        </select> -->
                        <select id="select" disabled>
                          <option id="blankop2"></option>
                          <option v-for="(titleList, index) in titleList" :key="index">{{titleList}}</option>
                        </select>

                        <label>Branch Plot:</label>
                        <div id="new-nodelist">
                            <textarea type="text" class="new-node" style="height:100px;" id="textfield" disabled></textarea>
                        </div>

                        <!-- <span id="node-type-panel" class="radio-panel">
                            <input type="radio" name="node-type" id="rd-parent" value="parent"><label for="rd-parent">Parent(root)</label>
                            <input type="radio" name="node-type" id="rd-child" value="children"><label for="rd-child">Child</label>
                            <input type="radio" name="node-type" id="rd-sibling" value="siblings"><label for="rd-sibling">Sibling</label>
                        </span> -->

                        <div class="row">
                            <div class="small-6 columns">
                                <button type="button" class="button" id="btn-add-nodes" style="width:120px" disabled>Add</button>
                            </div>
                            <div class="small-6 columns">
                                <button type="button" class="button alert" id="btn-delete-nodes" style="width:120px" disabled>Delete</button>
                            </div>
                        </div>
                        <button @click="postJson" type="button" class="button success" id="btn-commit" style="width:270px;margin-top:10px" disabled>Commit</button>
                    </div>
                </div>
                <div class="small-9 columns" style="margin-top:20px">
                    <div id="chart-container" style="position:relative;height:500px;"></div>
                </div>
            </div>
        </div>  
        <div>
          <br>
        </div>
    </div>
</template>

<script type="text/javascript">

import orgchart from "@/assets/jquery.orgchart.js"
// import vDialogs from 'v-dialogs'

var choiceList = [];

var Init = function() {
  var datascource = {
    'name': 'Beginning',
    'title': 'Choose Start Video'
  };

  var getId = function() {
    return (new Date().getTime()) * 1000 + Math.floor(Math.random() * 1001);
  };

  var oc = $('#chart-container').orgchart({
    'direction': 'l2r',
    'pan': 'true',
    'draggable': 'true',
    'zoom': 'true',
    'data': datascource,
    'chartClass': 'edit-state',
    'nodeContent': 'title',
    'parentNodeSymbol': 'fa-th-large',
    'exportButton': true,
    'exportFilename': 'MyOrgChart',
    'createNode': function($node, data) {
      $node[0].id = getId();
    }
  });

  oc.$chartContainer.on('click', '.node', function() {
    var $this = $(this);
    $('#selected-node').val($this.find('.content').text()).data('node', $this);
    $('#node-plot').val($this.find('.title').text());
    $('#change').val($this.find('.content').text());
    if ($('#change option:selected').val() == $('#select option:selected').val()){
        $('#select').val('');
    }
  });

  oc.$chartContainer.on('click', '.orgchart', function(event) {
    if (!$(event.target).closest('.node').length) {
      $('#selected-node').val('');
      $('#node-plot').val('');
    }
    if ($('#change option:selected').val() == $('#select option:selected').val()){
        $('#select').val('');
    }
  });

  $('input[name="chart-state"]').click(function() {
    if (this.value === 'view'){
      this.value = 'edit';
      $('#textfield').attr("disabled",false);
      $('#select').attr("disabled",false);
      $('#change').attr("disabled",false);
      $('#btn-add-nodes').attr("disabled",false);
      $('#btn-delete-nodes').attr("disabled",false);
      $('#btn-commit').attr("disabled",false);
      $('#node-plot').attr("disabled",false);
    }
    else{
      this.value = 'view';
      $('#textfield').attr("disabled","disabled");
      $('#select').attr("disabled","disabled");
      $('#change').attr("disabled","disabled");
      $('#btn-add-nodes').attr("disabled","disabled");
      $('#btn-delete-nodes').attr("disabled","disabled");
      $('#btn-commit').attr("disabled","disabled");
      $('#node-plot').attr("disabled","disabled");
    }
  });

  // $('input[name="node-type"]').on('click', function() {
  //   var $this = $(this);
  //   if ($this.val() === 'parent') {
  //     $('#edit-panel').addClass('edit-parent-node');
  //     $('#new-nodelist').children(':gt(0)').remove();
  //   } else {
  //     $('#edit-panel').removeClass('edit-parent-node');
  //   }
  // });

  // $('#btn-add-input').on('click', function() {
  //   $('#new-nodelist').append('<li><input type="text" class="new-node"></li>');
  // });

  // $('#btn-remove-input').on('click', function() {
  //   var inputs = $('#new-nodelist').children('li');
  //   if (inputs.length > 1) {
  //     inputs.last().remove();
  //   }
  // });

  // var oldvideo = '';

  // $('#change').change(() => {
  //   $('#blankop').remove();
  //   if (oldvideo != ''){
  //     vm.data().videoList.push(oldvideo);
  //     alert('a');
  //   }
  //   oldvideo = $('#change option:selected').val();
  //   alert(oldvideo);
  //   // console.log(vm.methods.returnVideoList());
  //   vm.methods.returnVideoList()
  //   alert(vm.data().videoList.includes(oldvideo));
  //   if (vm.data().videoList.includes(oldvideo)){
  //     vm.data().videoList.splice(vm.data().videoList.indexOf(oldvideo),1);
  //     alert('b');
  //   }
  //   var changetitle = $('#change option:selected').val();
  //   if (changetitle == ''){
  //     return;
  //   }
  //   var $node = $('#selected-node').data('node');
  //   $node.find('.content').text(changetitle);
  //   $('#selected-node').val(changetitle);
  // });

  // var oldselect = null;

  // $('#select').change(() => {
  //   if (oldselect != null){
  //     vm.data().videoList.push(oldselect);
  //   }
  //   oldselect = $('#select option:selected').val();
  //   if (vm.data().videoList.includes(oldselect)){
  //     vm.data().videoList.splice(vm.data().videoList.indexOf(oldselect),1);
  //   }
  // });


  $('#btn-add-nodes').on('click', function() {
    var flag = 0;
    var $chartContainer = $('#chart-container');
    var nodeVals = [];
    var title = $('#select option:selected').val();

    $('#new-nodelist').find('.new-node').each(function(index, item) {
      var validVal1 = item.value.trim();
      for (var i = 0; i < choiceList.length; i++) {
        if (validVal1 == choiceList[i]){
          alert('Plot should not repeat');
          flag = 1;
          return;
        }
      }
      if (validVal1.length) {
        nodeVals.push(validVal1);
      }
    });

    if (flag == 1){
      return;
    }

    if (!nodeVals.length) {
      alert('Please input branch plot');
      return;
    }

    var $node = $('#selected-node').data('node');

    if (title == '') {
      alert('Please choose branch video');
      return;
    }
    // var nodeType = $('input[name="node-type"]:checked');
    // if (!nodeType.length) {
    //   alert('Please select a node type');
    //   return;
    // }
    // if (nodeType.val() !== 'parent' && !$('.orgchart').length) {
    //   alert('Please creat the root node firstly when you want to build up the orgchart from the scratch');
    //   return;
    // }
    if (!$node) {
      alert('Please select one node in chart');
      return;
    }
    var hasChild = $node.parent().attr('colspan') > 0 ? true : false;
    if (!hasChild) {
      var rel = nodeVals.length > 1 ? '110' : '100';
      // oc.addChildren($node, function (){
      //     return { 'title': title, 'relationship': rel, 'id': getId(), 'name': name};
      // });
      oc.addChildren($node, nodeVals.map(function (item) {
          choiceList.push(item);
          return {'relationship': rel, 'id': getId(), 'name': item, 'title': title};
        }));
    } else {
      // oc.addSiblings($node.closest('tr').siblings('.nodes').find('.node:first'), function (){
      //     return { 'title': title, 'relationship': '110', 'id': getId(), 'name': name};
      // });
      oc.addSiblings($node.closest('tr').siblings('.nodes').find('.node:first'), nodeVals.map(function (item) {
          choiceList.push(item);
          return { 'title': item, 'relationship': '110', 'id': getId(), 'name': item, 'title': title};
        }));
    }
    // if (nodeType.val() === 'parent') {
    //   if (!$chartContainer.children('.orgchart').length) {// if the original chart has been deleted
    //     oc = $chartContainer.orgchart({
    //       'data' : { 'name': nodeVals[0] },
    //       'exportButton': true,
    //       'exportFilename': 'SportsChart',
    //       'parentNodeSymbol': 'fa-th-large',
    //       'createNode': function($node, data) {
    //         $node[0].id = getId();
    //       }
    //     });
    //     oc.$chart.addClass('view-state');
    //   } else {
    //     oc.addParent($chartContainer.find('.node:first'), { 'name': nodeVals[0], 'id': getId() });
    //   }
    // } else if (nodeType.val() === 'siblings') {
    //   if ($node[0].id === oc.$chart.find('.node:first')[0].id) {
    //     alert('You are not allowed to directly add sibling nodes to root node');
    //     return;
    //   }
    //   oc.addSiblings($node, nodeVals.map(function (item) {
    //       return { 'name': item, 'relationship': '110', 'id': getId() };
    //     }));
    // } else {
    //   var hasChild = $node.parent().attr('colspan') > 0 ? true : false;
    //   if (!hasChild) {
    //     var rel = nodeVals.length > 1 ? '110' : '100';
    //     oc.addChildren($node, nodeVals.map(function (item) {
    //         return { 'name': item, 'relationship': rel, 'id': getId() };
    //       }));
    //   } else {
    //     oc.addSiblings($node.closest('tr').siblings('.nodes').find('.node:first'), nodeVals.map(function (item) {
    //         return { 'name': item, 'relationship': '110', 'id': getId() };
    //       }));
    //   }
    // }
  });

  $('#btn-delete-nodes').on('click', () => {
    var $node = $('#selected-node').data('node');
    if (!$node) {
      alert('Please select one node in chart');
      return;
    } else if ($node[0] === $('.orgchart').find('.node:first')[0]) {
      alert('You should not delete the root nood');
      return;
    }
    var plot = $node.find('.title').text();
    for (var i = 0; i < choiceList.length; i++) {
      if (plot == choiceList[i]){
        choiceList.splice(i, 1);
        break;
      }
    }
    oc.removeNodes($node);
    $('#selected-node').val('').data('node', null);
  });
}

var structure = ''

function createJson() {//获取json到structure
  var subObj = getJson($('#chart-container'));
  var datasourceJSON = {};
  datasourceJSON = JSON.stringify(subObj, null, 2);
  structure = datasourceJSON;
}

function getJson(chart) {//生成Json
  var tr = chart.find('tr:first');
  var subObj = { 'plot': tr.find('.title').text(), 'video': tr.find('.content').text() }
  tr.siblings(':last').children().each(function() {
      if (!subObj.children) { subObj.children = []; }
      subObj.children.push(getJson($(this)));
    });
  return subObj
}

function getTitle(chart, nodetitlelist){
  var tr = chart.find('tr:first');
  var subobj = tr.find('.content').text();
  nodetitlelist.push(subobj);
  tr.siblings(':last').children().each(function() {
    getTitle($(this), nodetitlelist);
  });
}

import qs from 'qs';

var vm = {
  name: 'editintervideo',
  data() {
    return {
        titleList: [],
        videoList: [],
        IVID: 0,
    }
  },
  mounted() {
    this.IVID = this.$route.query.interVideoID
    this.$axios
      .get('/edit/' + this.IVID)
      .then(successResponse => {
        this.videoList = successResponse.data.data;
        for (var i = 0; i < this.videoList.length; i++){
          this.titleList.push(this.videoList[i].title);
        }
      })
      .catch(failResponse => {
        this.$dlg.toast('Error!', {messageType: 'error', closeTime: 5})
      });
    Init();

    $('#change').change(() => {
      var $node = $('#selected-node').data('node');
      if ($node == null){
        this.$dlg.toast('Please choose one node in chart', {messageType: 'warning', closeTime: 3});
        return;
      }
      $('#blankop').remove();
      if ($('#change option:selected').val() == $('#select option:selected').val()){
        $('#select').val('');
      }
      var changetitle = $('#change option:selected').val();
      if (changetitle == ''){
        return;
      }
      if ($node != null){
        $node.find('.content').text(changetitle);
        $('#selected-node').val(changetitle);
      }
      var nodetitlelist = [];
      getTitle($('#chart-container'), nodetitlelist);
      var valuelist = document.getElementsByTagName('option');
      for (var i = 0; i < valuelist.length; i++){
        $(valuelist[i]).attr("disabled", false);
      }
      for (var i = 0; i < nodetitlelist.length; i++){
        for (var j = 0; j < valuelist.length; j++){
          if ($(valuelist[j]).text() == nodetitlelist[i]){
            $(valuelist[j]).attr("disabled", "disabled");
          }
        }
      }
    });

    $('#select').change(() => {
      var $node = $('#selected-node').data('node');
      if ($node == null){
        this.$dlg.toast('Please choose one node in chart', {messageType: 'warning', closeTime: 3});
        return;
      }
      var nodetitlelist = [];
      getTitle($('#chart-container'), nodetitlelist);
      var valuelist = document.getElementsByTagName('option');
      for (var i = 0; i < valuelist.length; i++){
        $(valuelist[i]).attr("disabled", false);
      }
      for (var i = 0; i < nodetitlelist.length; i++){
        for (var j = 0; j < valuelist.length; j++){
          if ($(valuelist[j]).text() == nodetitlelist[i]){
            $(valuelist[j]).attr("disabled", "disabled");
          }
        }
      }
    });

    $('#btn-add-nodes').on('blur', function(){
      var nodetitlelist = [];
      getTitle($('#chart-container'), nodetitlelist);
      var valuelist = document.getElementsByTagName('option');
      for (var i = 0; i < valuelist.length; i++){
        $(valuelist[i]).attr("disabled", false);
      }
      for (var i = 0; i < nodetitlelist.length; i++){
        for (var j = 0; j < valuelist.length; j++){
          if ($(valuelist[j]).text() == nodetitlelist[i]){
            $(valuelist[j]).attr("disabled", "disabled");
          }
        }
      }
    });


    $('#btn-delete-nodes').on('blur', function(){
      var nodetitlelist = [];
      getTitle($('#chart-container'), nodetitlelist);
      var valuelist = document.getElementsByTagName('option');
      for (var i = 0; i < valuelist.length; i++){
        $(valuelist[i]).attr("disabled", false);
      }
      for (var i = 0; i < nodetitlelist.length; i++){
        for (var j = 0; j < valuelist.length; j++){
          if ($(valuelist[j]).text() == nodetitlelist[i]){
            $(valuelist[j]).attr("disabled", "disabled");
          }
        }
      }
    });


    $('#node-plot').on('input', function(){
      var $node = $('#selected-node').data('node');
      $node.find('.title').text($('#node-plot').val());
    });
  },
  methods: {
    postJson(){
      const key = this.$dlg.mask('uploading...')
      createJson()
      this.$axios
        .post('/edit' , qs.stringify({
          Structure: structure,
          ID: this.IVID
        }))
        .then(successResponse => {
          this.$dlg.close(key)
          if (successResponse.data.code === 200) {
            this.$dlg.toast(successResponse.data.data, {messageType: 'success', closeTime: 3})
            this.$router.push('/myaccount')
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 3})
          }
        })
        .catch(failResponse => {
          this.$dlg.close(key)
          this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 3})
        })
    }
  }
}

export default vm
</script>
