var TreeMap = function() {
  var nodes = [];

  var _findFirst = function(index) {
    var items = nodes.filter(function(n) {
      return n.start <= index && n.end >= index;
    });

    return (items && items.length > 0) ? items[0] : null;
  };

  var _findPath = function(path) {
    return nodes.filter(function(n) {
      return n.path === path;
    });
  };

  var _updateIndexes = function() {
    var start = 0;

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      var length = node.end - node.start;
      node.start = start;
      node.end = start + length;

      start += length + 1;
    }
  };

  var _combineSiblings = function() {
    for (var i = 0; i < nodes.length; i++) {
      if (i + 1 < nodes.length) {
        var node = nodes[i];
        var nextNode = nodes[i + 1];

        if (node.path === nextNode.path) {
          node.end = nextNode.end;
          nodes.splice(i + 1, 1);

          _combineSiblings();
          return;
        }
      }
    }
  };

  return {
    add: function(path, index, count) {
      if (_findPath(path).length > 0) {
        throw Error(path + ' already added.');
      }

      var newNode = {
        path: path,
        start: index,
        end: index + count - 1,
        count: count
      };

      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        if (node.start <= index && node.end >= index) {
          var splittedStart = {
            path: node.path,
            start: node.start,
            end: index - 1,
            count: node.count
          };
          var splittedEnd = {
            path: node.path,
            start: index + count,
            end: index + count + (node.end - node.start) - (splittedStart.end - splittedStart.start) - 1,
            count: node.count
          };
          nodes.splice(i, 1, splittedStart, newNode, splittedEnd);

          _updateIndexes();
          return;
        }
      }
      nodes.push(newNode);
    },

    remove: function(path) {
      var indexes = _findPath(path).map(function(p) {
        return nodes.indexOf(p);
      });

      var first = indexes[0];
      var last = indexes[indexes.length - 1];

      nodes.splice(first, last - first + 1);

      _updateIndexes();
      _combineSiblings();
    },

    getPath: function(index) {
      var first = _findFirst(index);

      return first ? first.path : undefined;
    },

    getPage: function(index, pageSize) {
      var first = _findFirst(index);

      if (first) {
        var pageIndex = index - first.start;

        return {
          path: first.path,
          page: Math.floor(pageIndex / pageSize)
        };
      }
    },

    getPages: function(start, end, pageSize) {
      var pages = [];

      if (start <= end) {
        for (var i = start; i <= end; i++) {
          var page = this.getPage(i, pageSize);

          if (pages.filter(function(p) {
              return p.path === page.path && p.page === page.page;
            }).length === 0) {
            pages.push(page);
          }
        }
      } else {
        for (var i = start; i >= end; i--) {
          var page = this.getPage(i, pageSize);

          if (pages.filter(function(p) {
              return p.path === page.path && p.page === page.page;
            }).length === 0) {
            pages.push(page);
          }
        }
      }

      return pages;
    },

    //public to help debugging
    _nodes: nodes
  };
};
