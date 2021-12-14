<template>
<!DOCTYPE html>
<html>
  <head>
    <link
      href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
      rel="stylesheet"
    />
    <link href="./css/sb-admin-2.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="./css/page3.css" />
  </head>
  <body id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="javascript:void(0)"
        >
          <div class="sidebar-brand-icon rotate-n-15"></div>
          <div class="sidebar-brand-text mx-3"></div>
        </a>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item">
          <a class="nav-link" href="/page1.html">
            <span>현재 위치</span>
          </a>
        </li>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item">
          <a class="nav-link" href="/page2.html">
            <span>공원 리스트</span>
          </a>
        </li>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item">
          <a class="nav-link" href="/page3.html">
            <span>지도 검색</span>
          </a>
        </li>
        <hr class="sidebar-divider my-0" />
      </ul>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="container-fluid">
            <div style="height: 30px"></div>

            <div class="card shadow mb-4">
              <div class="card-body" style="height: 1000px">
                <div class="table-responsive">
                  <div>
                    <div>
                      <div class="map_wrap">
                        <div id="map" style="width: 100%; height: 100%"></div>
                        <div id="menu_wrap" class="bg_white">
                          <div class="option">
                            <div>
                              <form onsubmit="searchPlaces(); return false;">
                                키워드 :
                                <input
                                  type="text"
                                  value=""
                                  id="keyword"
                                  size="15"
                                />
                                <button type="submit">검색하기</button>
                              </form>
                            </div>
                          </div>
                          <hr />
                          <ul id="placesList"></ul>
                          <div id="pagination"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
</template>