<template>
  <div>
      <div class="task">
          {{qew}}
      </div>
  </div>
</template>

<script>
  export default {
    name: "taskXML",
      data() {
        return {
            qew: "<html xmlns:o='urn:schemas-microsoft-com:office:office'\n" +
              "      xmlns:w='urn:schemas-microsoft-com:office:word'\n" +
              "      xmlns:v='urn:schemas-microsoft-com:vml'\n" +
              "      xmlns='urn:w3-org-ns:HTML'>\n" +
              "<head>\n" +
              "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8=\"/>\n" +
              "    <title>=D0=98=D0=BC=D0=BF=D0=BE=D1=80=D1=82 =D0=B8=D0=BD=D1=84=D0=BE=D1=80=D0=BC=D0=B0=D1=86=D0=B8=D0=B8 =D0=BE =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D1=85 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D1=85</title>\n" +
              "    <xml>\n" +
              "        <o:OfficeDocumentSettings>\n" +
              "            <o:TargetScreenSize>1024x640</o:TargetScreenSize>\n" +
              "            <o:PixelsPerInch>72</o:PixelsPerInch>\n" +
              "            <o:AllowPNG/>\n" +
              "        </o:OfficeDocumentSettings>\n" +
              "        <w:WordDocument>\n" +
              "            <w:View>Print</w:View>\n" +
              "            <w:Zoom>90</w:Zoom>\n" +
              "            <w:DoNotOptimizeForBrowser/>\n" +
              "        </w:WordDocument>\n" +
              "    </xml>\n" +
              "    <style>\n" +
              "                <!--\n" +
              "        @page Section1 {\n" +
              "            size: 8.5in 11.0in;\n" +
              "            margin: 1.0in;\n" +
              "            mso-header-margin: .5in;\n" +
              "            mso-footer-margin: .5in;\n" +
              "            mso-paper-source: 0;\n" +
              "        }\n" +
              "\n" +
              "        table {\n" +
              "            border: solid 1px;\n" +
              "            border-collapse: collapse;\n" +
              "        }\n" +
              "\n" +
              "        table td, table th {\n" +
              "            border: solid 1px;\n" +
              "            padding: 5px;\n" +
              "        }\n" +
              "\n" +
              "        td {\n" +
              "            page-break-inside: avoid;\n" +
              "        }\n" +
              "\n" +
              "        tr {\n" +
              "            page-break-after: avoid;\n" +
              "        }\n" +
              "\n" +
              "        div.Section1 {\n" +
              "            page: Section1;\n" +
              "        }\n" +
              "\n" +
              "        /* Confluence print stylesheet. Common to all themes for print medi=\n" +
              "a */\n" +
              "/* Full of !important until we improve batching for print CSS */\n" +
              "\n" +
              "@media print {\n" +
              "    #main {\n" +
              "        padding-bottom: 1em !important; /* The default padding of 6em is to=\n" +
              "o much for printouts */\n" +
              "    }\n" +
              "\n" +
              "    body {\n" +
              "        font-family: Arial, Helvetica, FreeSans, sans-serif;\n" +
              "        font-size: 10pt;\n" +
              "        line-height: 1.2;\n" +
              "    }\n" +
              "\n" +
              "    body, #full-height-container, #main, #page, #content, .has-personal-sid=\n" +
              "ebar #content {\n" +
              "        background: #fff !important;\n" +
              "        color: #000 !important;\n" +
              "        border: 0 !important;\n" +
              "        width: 100% !important;\n" +
              "        height: auto !important;\n" +
              "        min-height: auto !important;\n" +
              "        margin: 0 !important;\n" +
              "        padding: 0 !important;\n" +
              "        display: block !important;\n" +
              "    }\n" +
              "\n" +
              "    a, a:link, a:visited, a:focus, a:hover, a:active {\n" +
              "        color: #000;\n" +
              "    }\n" +
              "\n" +
              "    #content h1,\n" +
              "    #content h2,\n" +
              "    #content h3,\n" +
              "    #content h4,\n" +
              "    #content h5,\n" +
              "    #content h6 {\n" +
              "        font-family: Arial, Helvetica, FreeSans, sans-serif;\n" +
              "        page-break-after: avoid;\n" +
              "    }\n" +
              "\n" +
              "    pre {\n" +
              "        font-family: Monaco, \"Courier New\", monospace;\n" +
              "    }\n" +
              "\n" +
              "    #header,\n" +
              "    .aui-header-inner,\n" +
              "    #navigation,\n" +
              "    #sidebar,\n" +
              "    .sidebar,\n" +
              "    #personal-info-sidebar,\n" +
              "    .ia-fixed-sidebar,\n" +
              "    .page-actions,\n" +
              "    .navmenu,\n" +
              "    .ajs-menu-bar,\n" +
              "    .noprint,\n" +
              "    .inline-control-link,\n" +
              "    .inline-control-link a,\n" +
              "    a.show-labels-editor,\n" +
              "    .global-comment-actions,\n" +
              "    .comment-actions,\n" +
              "    .quick-comment-container,\n" +
              "    #addcomment {\n" +
              "        display: none !important;\n" +
              "    }\n" +
              "\n" +
              "    /* CONF-28544 cannot print multiple pages in IE */\n" +
              "    #splitter-content {\n" +
              "        position: relative !important;\n" +
              "    }\n" +
              "\n" +
              "    .comment .date::before {\n" +
              "        content: none !important; /* remove middot for print view */\n" +
              "    }\n" +
              "\n" +
              "    h1.pagetitle img {\n" +
              "        height: auto;\n" +
              "        width: auto;\n" +
              "    }\n" +
              "\n" +
              "    .print-only {\n" +
              "        display: block;\n" +
              "    }\n" +
              "\n" +
              "    #footer {\n" +
              "        position: relative !important; /* CONF-17506 Place the footer at en=\n" +
              "d of the content */\n" +
              "        margin: 0;\n" +
              "        padding: 0;\n" +
              "        background: none;\n" +
              "        clear: both;\n" +
              "    }\n" +
              "\n" +
              "    #poweredby {\n" +
              "        border-top: none;\n" +
              "        background: none;\n" +
              "    }\n" +
              "\n" +
              "    #poweredby li.print-only {\n" +
              "        display: list-item;\n" +
              "        font-style: italic;\n" +
              "    }\n" +
              "\n" +
              "    #poweredby li.noprint {\n" +
              "        display: none;\n" +
              "    }\n" +
              "\n" +
              "    /* no width controls in print */\n" +
              "    .wiki-content .table-wrap,\n" +
              "    .wiki-content p,\n" +
              "    .panel .codeContent,\n" +
              "    .panel .codeContent pre,\n" +
              "    .image-wrap {\n" +
              "        overflow: visible !important;\n" +
              "    }\n" +
              "\n" +
              "    /* TODO - should this work? */\n" +
              "    #children-section,\n" +
              "    #comments-section .comment,\n" +
              "    #comments-section .comment .comment-body,\n" +
              "    #comments-section .comment .comment-content,\n" +
              "    #comments-section .comment p {\n" +
              "        page-break-inside: avoid;\n" +
              "    }\n" +
              "\n" +
              "    #page-children a {\n" +
              "        text-decoration: none;\n" +
              "    }\n" +
              "\n" +
              "    /**\n" +
              "     hide twixies\n" +
              "\n" +
              "     the specificity here is a hack because print styles\n" +
              "     are getting loaded before the base styles. */\n" +
              "    #comments-section.pageSection .section-header,\n" +
              "    #comments-section.pageSection .section-title,\n" +
              "    #children-section.pageSection .section-header,\n" +
              "    #children-section.pageSection .section-title,\n" +
              "    .children-show-hide {\n" +
              "        padding-left: 0;\n" +
              "        margin-left: 0;\n" +
              "    }\n" +
              "\n" +
              "    .children-show-hide.icon {\n" +
              "        display: none;\n" +
              "    }\n" +
              "\n" +
              "    /* personal sidebar */\n" +
              "    .has-personal-sidebar #content {\n" +
              "        margin-right: 0px;\n" +
              "    }\n" +
              "\n" +
              "    .has-personal-sidebar #content .pageSection {\n" +
              "        margin-right: 0px;\n" +
              "    }\n" +
              "\n" +
              "    .no-print, .no-print * {\n" +
              "        display: none !important;\n" +
              "    }\n" +
              "}\n" +
              "-->\n" +
              "    </style>\n" +
              "</head>\n" +
              "<body>\n" +
              "    <h1>=D0=98=D0=BC=D0=BF=D0=BE=D1=80=D1=82 =D0=B8=D0=BD=D1=84=D0=BE=D1=80=D0=BC=D0=B0=D1=86=D0=B8=D0=B8 =D0=BE =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D1=85 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D1=85</h1>\n" +
              "    <div class=\"Section1\">\n" +
              "        <h1 id=\"id-=D0=98=D0=BC=D0=BF=D0=BE=D1=80=D1=82=D0=B8=D0=BD=D1=84=D0=BE=D1=80=D0=BC=D0=B0=D1=86=D0=B8=D0=B8=D0=BE=D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D1=85=D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D1=85-=D0=A2=D0=B5=D0=BA=D1=83=D1=89=D0=B8=D0=B9=D0=B0=D0=BB=D0=B3=D0=BE=D1=80=D0=B8=D1=82=D0=BC=D1=80=D0=B0=D0=B1=D0=BE=D1=82=D1=8B=D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B7=D0=BA=D0=B8=D0=B8=D0=BD=D1=84=D0=BE=D1=80=D0=BC=D0=B0=D1=86=D0=B8=D0=B8=D0=BE=D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D1=85=D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D1=85\">=D0=A2=D0=B5=D0=BA=D1=83=D1=89=D0=B8=D0=B9 =D0=B0=D0=BB=D0=B3=D0=BE=D1=80=D0=B8=D1=82=D0=BC =D1=80=D0=B0=D0=B1=D0=BE=D1=82=D1=8B =D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B7=D0=BA=D0=B8 =D0=B8=D0=BD=D1=84=D0=BE=D1=80=D0=BC=D0=B0=D1=86=D0=B8=D0=B8 =D0=BE =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D1=85=\n" +
              " =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D1=85\n" +
              "</h1>\n" +
              "<p>=D0=95=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=B4=D0=BE 09:3=\n" +
              "0 =D0=9D=D0=B0=D0=B4=D0=B7=D0=BE=D1=80=D0=BD=D1=8B=D0=B9 =D0=BE=D1=82=D0=B4=D0=B5=D0=BB (=D0=9D=D0=9E) =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8 =D0=B8 =D0=BB=D0=B8=D1=86=D0=B0, =D1=81=D0=B2=D1=8F=D0=B7=D0=B0=D0=BD=D0=BD=D1=8B=D1=85 =D1=81 =D1=84=D0=B8=D0=BD=D0=B0=D0=BD=D1=81=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=B8=D0=B5=D0=BC =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D0=B7=D0=BC=D0=B0 =D0=B8 =D1=8D=D0=BA=D1=81=D1=82=D1=80=D0=B5=D0=BC=D0=B8=D0=B7=D0=BC=D0=B0. </p>\n" +
              "<p>=D0=9F=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=BE=D1=84=D0=B8=D1=86=D0=B8=D0=B0=D0=BB=D1=8C=D0=BD=D1=8B=D0=B9 =D1=81=D0=B0=D0=B9=D1=82 =D0=B0=D0=B3=D0=B5=D0=BD=D1=82=D1=81=D1=82=D0=B2=D0=B0 =D0=BF=D0=BE =D1=84=D0=B8=D0=BD=D0=B0=D0=BD=D1=81=D0=BE=D0=B2=D0=BE=D0=BC=D1=83 =D0=BC=D0=BE=D0=BD=D0=B8=D1=82=D0=BE=D1=80=D0=B8=D0=BD=D0=B3=D1=83 <a href=\"https://kfm.gov.kz/ru/the-list-of-organizations-and-individuals-asso=cia/\" class=\"external-link\" rel=\"nofollow\">https://kfm.gov.kz/ru/the-li=\n" +
              "st-of-organizations-and-individuals-associa/</a>.</p>\n" +
              "<p><strong>1 =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA</strong> - =D0=9F=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B9 =D0=B8 =D0=BB=D0=B8=D1=86, =D1=81=D0=B2=D1=8F=D0=B7=D0=B0=D0=BD=D0=BD=D1=8B=D1=85 =D1=81 =D1=84=D0=B8=D0=BD=D0=B0=D0=BD=D1=81=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=B8=D0=B5=D0=BC =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D0=B7=D0=BC=D0=B0 =D0=B8 =D1=8D=D0=BA=D1=81=D1=82=D1=80=D0=B5=D0=BC=D0=B8=D0=B7=D0=BC=D0=B0. </p>\n" +
              "<ul>\n" +
              "<li><p>=D0=94=D0=B5=D0=B9=D1=81=D1=82=D0=B2=D1=83=D1=8E=D1=89=D0=B8=D0=B5 -=\n" +
              " =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=B4=D0=BE =D0=BD=D0=B0=D1=87=D0=B0=D0=BB=D0=BE =D1=82=D0=BE=D1=80=D0=B3=D0=BE=D0=B2</p></li>\n" +
              "<li><p>=D0=92=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D0=B5 - =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=B4=D0=BE =D0=BD=D0=B0=D1=87=D0=B0=D0=BB=D0=BE =D1=82=D0=BE=D1=80=D0=B3=D0=BE=D0=B2</p></li>\n" +
              "<li><p>=D0=98=D1=81=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D0=B5 -=\n" +
              " =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=B4=D0=BE =D0=BD=D0=B0=D1=87=D0=B0=D0=BB=D0=BE =D1=82=D0=BE=D1=80=D0=B3=D0=BE=D0=B2</p></li>\n" +
              "</ul>\n" +
              "<p>=D0=92 BOS: =D0=A1=D0=BF=D1=80=D0=B0=D0=B2=D0=BE=D1=87=D0=BD=D0=B8=D0=BA=D0=B8 =E2=86=92 =D0=A2=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D0=B5 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8 =E2=86=92 =D0=9C=D0=B5=D1=81=D1=82=D0=BD=D1=8B=D0=B5 =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D1=8B</p>\n" +
              "<span class=\"confluence-embedded-file-wrapper image-center-wrapper\"><img\n" +
              "class=\"confluence-embedded-image image-center\" alt=\"=D0=A0=D0=B8=D1=81.= 1 =D0=9C=D0=B5=D1=81=D1=82=D0=BD=D1=8B=D0=B5 =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D1=8B\" loading=\"lazy\" src=\"6f46bd71a474da=\n" +
              "4b78f457aea5c519\" data-image-src=\"https://my-atlassian-site-146745.atlass=\n" +
              "ian.net/wiki/download/attachments/206700555/%D0%9C%D0%B5%D1%81%D1%82%D0%BD%=\n" +
              "D1%8B%D0%B5%20%D1%82%D0%B5%D1%80%D1%80%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%8B.=png?version=1&amp;modificationDate=1614569755737&amp;cacheVersion=1&amp;api=v2\" data-height=\"187\" data-width=\"399\" data-unresolved-comment-count=\"0\" data-linked-resource-id=\"206110817\" data-linked-resource-version=\"1\" data-linked-resource-type=\"attachment\" data-linked-resource-default-alias=\"=D0=9C=D0=B5=D1=81=D1=82=D0=BD=D1=8B=D0=B5 =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D1=8B.png\" data-base-url=\"https://my-atlassian-site-146745.atlassian.net/wiki\" data-linked-resource-content-type=\"image/png\" data-linked-resource-container-id=\"206700555\" data-linked-resource-container-version=\"9\" data-media-id=\"1f4d2729-52ba-4bd6-bd=fc-47daf29d7612\" data-media-type=\"file\" width=\"468\" height=\"219\"/></span>\n" +
              "<p style=\"text-align: center;\">=D0=A0=D0=B8=D1=81. 1 =D0=9C=D0=B5=D1=81=D1=82=D0=BD=D1=8B=D0=B5 =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D1=8B</p>\n" +
              "<p></p>\n" +
              "<p><strong>2 =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA</strong> - =D0=9C=D0=B5=D0=B6=D0=B4=D1=83=D0=BD=D0=B0=D1=80=D0=BE=D0=B4=D0=BD=D1=8B=D0=B9 =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C =D0=BB=D0=B8=D1=86, =D0=BF=D1=80=D0=B8=D1=87=D0=B0=D1=81=D1=82=D0=BD=D1=8B=D1=85 =D0=BA =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=BE=D0=B9 =D0=B8 =D1=8D=D0=BA=D1=81=D1=82=D1=80=D0=B5=D0=BC=D0=B8=D1=81=D0=BA=D0=BE=D0=B9 =D0=B4=D0=B5=D1=8F=D1=82=D0=B5=D0=BB=D1=8C=D0=BD=D0=BE=D1=81=D1=82=D0=B8 (=D0=A1=D0=B2=D0=BE=D0=B4=D0=BD=D1=8B=D0=B9 =D1=81=D0=B0=D0=BD=D0=BA=D1=86=D0=B8=D0=BE=D0=BD=D0=BD=D1=8B=D0=B9 =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C =D0=A1=D0=BE=D0=B2=D0=B5=D1=82=D0=B0 =D0=B1=D0=B5=D0=B7=D0=BE=D0=BF=D0=B0=D1=81=D0=BD=D0=BE=D1=81=D1=82=D0=B8 =D0=9E=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8 =D0=9E=D0=B1=D1=8A=D0=B5=D0=B4=D0=B8=D0=BD=D0=B5=D0=BD=D0=BD=D1=8B=D1=85 =D0=9D=D0=B0=D1=86=D0=B8=D0=B9 (=D0=9E=D0=9E=D0=9D)). </p>\n" +
              "<p>=D0=9D=D0=9E =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82 =D0=B8 =D1=81=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82 =D0=BD=D0=B0 =D0=B4=D0=B2=D1=83=D1=85 =D1=80=D0=B0=D0=B7=D0=BD=D1=8B=D1=85 =D1=81=D0=B0=D0=B9=D1=82=D0=B0=D1=85, =D0=BE=D1=84=D0=B8=D1=86=D0=B8=D0=B0=D0=BB=D1=8C=D0=BD=D1=8B=D0=B9 =D1=81=D0=B0=D0=B9=D1=82 =D0=9A=D0=A4=D0=9C GOV =D0=B8 =D1=81=D0=B0=D0=B9=D1=82=D0=B0 =D0=9E=D0=9E=D0=9D <a href=\"https://www.un.org/securityco=\n" +
              "uncil/ru/un-sc-consolidated-list\" class=\"external-link\" rel=\"nofollow\">=\n" +
              "https://www.un.org/securitycouncil/ru/un-sc-consolidated-list</a> (=D0=B1=D0=BE=D0=BB=D0=B5=D0=B5 =D0=BF=D1=80=D0=B0=D0=B2=D0=B8=D0=BB=D1=8C=D0=BD=D0=B0=D1=8F =D0=B8 =D1=80=D0=B0=D0=BD=D0=BD=D1=8F=D1=8F =D0=B8=D0=BD=D1=84=D0=BE=D1=80=D0=BC=D0=B0=D1=86=D0=B8=D1=8F =D0=BF=D0=BE=D1=8F=D0=B2=D0=BB=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=BD=D0=B0 =D1=81=D0=B0=D0=B9=D1=82=D0=B5 =\n" +
              "=D1=81 =D0=B0=D0=BD=D0=B3=D0=BB=D0=B8=D0=B9=D1=81=D0=BA=D0=B8=D0=BC =D1=8F=D0=B7=D1=8B=D0=BA=D0=BE=D0=BC).</p>\n" +
              "<ul>\n" +
              "<li><p>=D0=94=D0=B5=D0=B9=D1=81=D1=82=D0=B2=D1=83=D1=8E=D1=89=D0=B8=D0=B5 -=\n" +
              " =D1=84=D0=B0=D0=B9=D0=BB =E2=80=9C=D0=9B=D0=B8=D1=86=D0=B0, =D0=B2=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D0=B5 =D0=B2 =D1=81=D0=BE=D0=BE=D1=82=D0=B2=D0=B5=D1=82=D1=81=D1=82=D0=B2=D0=B8=D0=B8 =D1=81 =D0=A0=D0=A1=D0=91 =D0=9E=D0=9E=D0=9D =E2=84=961373 =D0=BE=D1=82 28 =D1=84=D0=B5=D0=B2=D1=80=D0=B0=D0=BB=D1=8F 2019 =D0=B3=D0=BE=D0=B4=D0=B0=E2=80=9C =D0=BF=D1=80=D0=B8=D0=BD=D1=8F=D1=82 =D0=BE=D0=B4=D0=B8=D0=BD =D1=80=D0=B0=D0=B7, =\n" +
              "=D0=B0 =D1=84=D0=B0=D0=B9=D0=BB =E2=80=9C=D0=A1=D0=B0=D0=BD=D0=BA=D1=86=D0=B8=D0=BE=D0=BD=D0=BD=D1=8B=D0=B5 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8=E2=80=9C =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=8E=D1=82=D1=81=D1=8F =\n" +
              "=D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=B4=D0=BE =D0=BD=D0=B0=D1=87=D0=B0=D0=BB=D0=BE =D1=82=D0=BE=D1=80=D0=B3=D0=BE=D0=B2.</p></li>\n" +
              "<li><p>=D0=92=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D0=B5 - =D0=BF=D0=BE=D1=8F=D0=B2=D0=BB=D1=8F=D1=8E=D1=82=D1=81=D1=8F =D0=BE=D1=87=D0=B5=D0=BD=D1=8C =D1=80=D0=B5=D0=B4=D0=BA=D0=BE</p></li>\n" +
              "<li><p>=D0=98=D1=81=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D0=B5 -=\n" +
              " =D0=BF=D0=BE=D1=8F=D0=B2=D0=BB=D1=8F=D1=8E=D1=82=D1=81=D1=8F =D0=BE=D1=87=D0=B5=D0=BD=D1=8C =D1=80=D0=B5=D0=B4=D0=BA=D0=BE </p></li>\n" +
              "</ul>\n" +
              "<p>=D0=92 BOS: =D0=A1=D0=BF=D1=80=D0=B0=D0=B2=D0=BE=D1=87=D0=BD=D0=B8=D0=BA=D0=B8 =E2=86=92 =D0=A2=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D0=B5 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8 =E2=86=92 =D0=9E=D0=9E=D0=9D</p>\n" +
              "<span class=\"confluence-embedded-file-wrapper image-center-wrapper\"><img\n" +
              "class=\"confluence-embedded-image image-center\" loading=\"lazy\" src=\"b4=\n" +
              "4fb8462eb1609edb6f1620cc5dee21\" data-image-src=\"https://my-atlassian-site=\n" +
              "-146745.atlassian.net/wiki/download/attachments/206700555/%D0%9E%D0%9E%D0%9=\n" +
              "D.png?version=1&amp;modificationDate=1614569900149&amp;cacheVersion=1=\n" +
              "&amp;api=v2\" data-height=\"167\" data-width=\"426\" data-unresolved-comment-count=\"0\" data-linked-resource-id=\"205979770\" data-linked-resource-version=\"1\" data-linked-resource-type=\"attachment\"\n" +
              "default-alias=\"=D0=9E=D0=9E=D0=9D.png\" data-base-url=\"https://my-atlass=\n" +
              "ian-site-146745.atlassian.net/wiki\" data-linked-resource-content-type=\"image/png\" data-linked-resource-container-id=\"206700555\" data-linked-resource-container-version=\"9\" data-media-id=\"26024a56-b2f6-4cf8-963c-0b4bc24-e825a\" data-media-type=\"file\" width=\"468\" height=\"182\"/></span>\n" +
              "<p style=\"text-align: center;\">=D0=A0=D0=B8=D1=81. 2 =D0=9E=D0=9E=D0=9D </p>\n" +
              "<p><strong>3 =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA</strong> - =D0=A1=D0=BF=D0=B8=D1=81=D0=BE=D0=BA =D0=BB=D0=B8=D1=86, =D0=BF=D1=80=D0=B8=D1=87=D0=B0=D1=81=D1=82=D0=BD=D1=8B=D1=85 =D0=BA =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=BE=D0=B9 =D0=B4=D0=B5=D1=8F=D1=82=D0=B5=D0=BB=D1=8C=D0=BD=D0=BE=D1=81=D1=82=D0=B8 (=D0=9E=D0=B1=D1=80=D0=B0=D1=89=D0=B5=D0=BD=D0=B8=D1=8F =D0=B8=D0=BD=D0=BE=D1=81=D1=82=D1=80=D0=B0=D0=BD=D0=BD=D1=8B=D1=85 =D0=B3=D0=BE=D1=81=D1=83=D0=B4=D0=B0=D1=80=D1=81=D1=82=D0=B2 =D0=BE =D0=B2=D0=BE=D0=B7=D0=BC=D0=BE=D0=B6=D0=BD=D0=BE=D0=B9 =D0=BF=D1=80=D0=B8=D1=87=D0=B0=D1=81=D1=82=D0=BD=D0=BE=D1=81=D1=82=D0=B8 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8 =D0=B8=D0=BB=D0=B8 =D1=84=D0=B8=D0=B7=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=BE=D0=B3=D0=BE =D0=BB=D0=B8=D1=86=D0=B0 =D0=BA =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=BE=D0=B9 =\n" +
              "=D0=B4=D0=B5=D1=8F=D1=82=D0=B5=D0=BB=D1=8C=D0=BD=D0=BE=D1=81=D1=82=D0=B8, =\n" +
              "=D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8 =D0=BF=D0=BE =D0=B2=D0=B7=D0=B0=D0=B8=D0=BC=D0=BD=D0=BE=D0=B9 =D0=B7=D0=B0=D0=BC=D0=BE=D1=80=D0=BE=D0=B7=D0=BA=D0=B5). </p>\n" +
              "<ul>\n" +
              "<li><p>=D0=94=D0=B5=D0=B9=D1=81=D1=82=D0=B2=D1=83=D1=8E=D1=89=D0=B8=D0=B5 -=\n" +
              " =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=B4=D0=BE =D0=BD=D0=B0=D1=87=D0=B0=D0=BB=D0=BE =D1=82=D0=BE=D1=80=D0=B3=D0=BE=D0=B2</p></li>\n" +
              "<li><p>=D0=92=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D0=B5 - =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=B4=D0=BE =D0=BD=D0=B0=D1=87=D0=B0=D0=BB=D0=BE =D1=82=D0=BE=D1=80=D0=B3=D0=BE=D0=B2</p></li>\n" +
              "<li><p>=D0=98=D1=81=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D0=B5 -=\n" +
              " =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=B4=D0=BE =D0=BD=D0=B0=D1=87=D0=B0=D0=BB=D0=BE =D1=82=D0=BE=D1=80=D0=B3=D0=BE=D0=B2</p></li>\n" +
              "</ul>\n" +
              "<p>=D0=92 BOS: =D0=A1=D0=BF=D1=80=D0=B0=D0=B2=D0=BE=D1=87=D0=BD=D0=B8=D0=BA=D0=B8 =E2=86=92 =D0=A2=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D0=B5 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8 =E2=86=92 =D0=94=D1=80=D1=83=D0=B3=D0=BE=D0=B9.</p>\n" +
              "<span class=\"confluence-embedded-file-wrapper image-center-wrapper\"><img\n" +
              "class=\"confluence-embedded-image image-center\" loading=\"lazy\" src=\"46=\n" +
              "e9c6e45760fad50c7e6c3815ae2b\" data-image-src=\"https://my-atlassian-site=\n" +
              "-146745.atlassian.net/wiki/download/attachments/206700555/%D0%94%D1%80%D1%8=\n" +
              "3%D0%B3%D0%BE%D0%B9.png?version=1&amp;modificationDate=1614569999694&amp;cacheVersion=1&amp;api=v2\" data-height=\"167\" data-width=\"421\" data-unresolved-comment-count=\"0\" data-linked-resource-id=\"206110829\" data-linked-resource-version=\"1\" data-linked-resource-type=\"attachment\" data-linked-resource-default-alias=\"=D0=94=D1=80=D1=83=D0=B3=D0=BE=D0=B9.png=\n" +
              "\" data-base-url=\"https://my-atlassian-site-146745.atlassian.net/wiki\" data-linked-resource-content-type=\"image/png\" data-linked-resource-container-id=\"206700555\" data-linked-resource-container-version=\"9\" data-media-id=\"d93c44d4-e0ed-44f2-96dc-99fa56de3bd7\" data-media-type=\"file\" width=\"468\" height=\"186\"/></span>\n" +
              "<p style=\"text-align: center;\">=D0=A0=D0=B8=D1=81. 3 =D0=94=D1=80=D1=83=D0=B3=D0=BE=D0=B9</p>\n" +
              "<p><strong>4 =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA</strong> - =D0=9F=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B9 =D0=B8 =D0=BB=D0=B8=D1=86, =D1=81=D0=B2=D1=8F=D0=B7=D0=B0=D0=BD=D0=BD=D1=8B=D1=85 =D1=81 =D1=84=D0=B8=D0=BD=D0=B0=D0=BD=D1=81=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=B8=D0=B5=D0=BC =D1=80=D0=B0=D1=81=D0=BF=D1=80=D0=BE=D1=81=D1=82=D1=80=D0=B0=D0=BD=D0=B5=D0=BD=D0=B8=D1=8F =D0=BE=D1=80=D1=83=D0=B6=D0=B8=D1=8F =D0=BC=D0=B0=D1=81=D1=81=D0=BE=D0=B2=D0=BE=D0=B3=D0=BE =D1=83=D0=BD=D0=B8=D1=87=D1=82=D0=BE=D0=B6=D0=B5=D0=BD=D0=B8=D1=8F. </p>\n" +
              "<p>=D0=9F=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=82=D1=8C =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE. =D0=9D=D0=B0 =D1=82=D0=B5=D0=BA=D1=83=D1=89=D0=B8=D0=B9 =D0=BC=D0=BE=D0=BC=D0=B5=D0=BD=D1=82 =D1=82=D0=B0=D0=BA=D0=BE=D0=B3=D0=BE =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B0 =D0=BD=D0=B5=D1=82 =D0=B8 =D0=B8=D0=BD=D1=81=D1=82=D1=80=D1=83=D0=BC=D0=B5=D0=BD=D1=82=D0=B0 =D0=B4=D0=BB=D1=8F =D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B7=D0=BA=D0=B8 =D0=BD=D0=B5=D1=82. =D0=A2=D0=B0=D0=BA =D0=BA=D0=B0=D0=BA =D0=B2 =D0=BD=D0=B0=D1=81=D1=82=D0=BE=D1=8F=D1=89=D0=B5=D0=B5 =D0=B2=D1=80=D0=B5=D0=BC=D1=8F =\n" +
              "=D0=B7=D0=B0=D0=BF=D0=B8=D1=81=D0=B8 =D0=BE=D1=82=D1=81=D1=83=D1=82=D1=81=D1=82=D0=B2=D1=83=D1=8E=D1=82. </p>\n" +
              "<p></p>\n" +
              "<p><strong>=D0=9A=D0=BE=D0=BD=D1=81=D0=BE=D0=BB=D0=B8=D0=B4=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=BD=D1=8B=D0=B5 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8</strong> =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=8E=D1=82=D1=81=D1=8F =D0=BD=D0=B0 =D1=81=D0=B0=D0=B9=D1=82=D0=B5: <a href=\"https://home=\n" +
              ".treasury.gov/policy-issues/financial-sanctions/consolidated-sanctions-list=\n" +
              "-data-files\" class=\"external-link\" rel=\"nofollow\">https://home.treasury=\n" +
              ".gov/policy-issues/financial-sanctions/consolidated-sanctions-list-data-fil=\n" +
              "es</a> </p>\n" +
              "<p>=D0=97=D0=B0=D0=B3=D1=80=D1=83=D0=B6=D0=B0=D0=B5=D1=82=D1=81=D1=8F =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA <a href=\"https://www.treasury.gov/ofac/=\n" +
              "downloads/consolidated/consolidated.xml\" class=\"external-link\" rel=\"nof=\n" +
              "ollow\"><u>CONSOLIDATED.XML</u></a></p>\n" +
              "<p>=D0=92 BOS =D0=A1=D0=BF=D1=80=D0=B0=D0=B2=D0=BE=D1=87=D0=BD=D0=B8=D0=BA=D0=B8 =E2=86=92 =D0=A2=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D0=B5 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8 =E2=86=92 =D0=97=D0=B0=D0=B3=D1=80=D1=83=D0=B7=D0=B8=D1=82=D1=8C =D1=81=D0=B0=D0=BD=D0=BA=D1=86=D0=B8=D0=BE=D0=BD=D0=BD=D1=8B=D0=B5 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8</p>\n" +
              "<span class=\"confluence-embedded-file-wrapper image-center-wrapper\"><img\n" +
              "class=\"confluence-embedded-image image-center\" loading=\"lazy\" src=\"37=\n" +
              "1cb389e2c3f2a715f6461698376569\" data-image-src=\"https://my-atlassian-site=\n" +
              "-146745.atlassian.net/wiki/download/attachments/206700555/%D0%9A%D0%BE%D0%B=\n" +
              "D%D1%81%D0%BE%D0%BB%D0%B8%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D=\n" +
              "1%8B%D0%B5%20%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B8.png?version=1&amp;modif=\n" +
              "icationDate=1614570393195&amp;cacheVersion=1&amp;api=v2\" data-height=\"116\" data-width=\"434\" data-unresolved-comment-count=\"0\" data-linked-resource-id=\"206045307\" data-linked-resource-version=\"1\" data-linked-resource-type=\"attachment\" data-linked-resource-default-alias=\"=D0=9A=D0=BE=D0=BD=D1=81=D0=BE=D0=BB=D0=B8=D0=B4=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=BD=D1=8B=D0=B5 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8.png\" data-base-url=\"https://my-atlassian-site-146745.atlassian.net/wiki\" data-linked-resource-content-type=\"image/png\" data-linked-resource-container-id=\"20670055=5\" data-linked-resource-container-version=\"9\" data-media-id=\"013426dd-2=\n" +
              "738-490e-90e5-56359146abea\" data-media-type=\"file\" width=\"468\" height=\"124\"/></span>\n" +
              "<p style=\"text-align: center;\">=D0=A0=D0=B8=D1=81. 4 =D0=9A=D0=BE=D0=BD=D1=81=D0=BE=D0=BB=D0=B8=D0=B4=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=BD=D1=8B=D0=B5 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8</p>\n" +
              "<p><strong>=D0=A1=D0=BF=D0=B5=D1=86=D0=B8=D0=B0=D0=BB=D0=B8=D0=B7=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=BD=D1=8B=D0=B5 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8</strong> =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=8E=D1=82=D1=81=D1=8F =D0=BD=D0=B0 =D1=81=D0=B0=D0=B9=D1=82=D0=B5: <a href=\"https:=\n" +
              "//home.treasury.gov/policy-issues/financial-sanctions/specially-designated-=\n" +
              "nationals-list-data-formats-data-schemas\" class=\"external-link\" rel=\"no=\n" +
              "follow\">https://home.treasury.gov/policy-issues/financial-sanctions/special=\n" +
              "ly-designated-nationals-list-data-formats-data-schemas</a> </p>\n" +
              "<p>=D0=97=D0=B0=D0=B3=D1=80=D1=83=D0=B6=D0=B0=D0=B5=D1=82=D1=81=D1=8F =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA: =E2=80=8B<a href=\"https://www.treasury=\n" +
              ".gov/ofac/downloads/sdn.xml\" class=\"external-link\" rel=\"nofollow\">SDN.X=\n" +
              "ML</a></p>\n" +
              "<p>=D0=92 BOS =D0=A1=D0=BF=D1=80=D0=B0=D0=B2=D0=BE=D1=87=D0=BD=D0=B8=D0=BA=D0=B8 =E2=86=92 =D0=A2=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D0=B5 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8 =E2=86=92 =D0=97=D0=B0=D0=B3=D1=80=D1=83=D0=B7=D0=B8=D1=82=D1=8C =D1=81=D0=B0=D0=BD=D0=BA=D1=86=D0=B8=D0=BE=D0=BD=D0=BD=D1=8B=D0=B5 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8</p>\n" +
              "<span class=\"confluence-embedded-file-wrapper image-center-wrapper\"><img\n" +
              "class=\"confluence-embedded-image image-center\" loading=\"lazy\" src=\"27=\n" +
              "0a30bf33be6b57b3fa5e7bf342624b\" data-image-src=\"https://my-atlassian-site=\n" +
              "-146745.atlassian.net/wiki/download/attachments/206700555/%D0%A1%D0%BF%D0%B=\n" +
              "5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D=\n" +
              "0%BD%D1%8B%D0%B9%20%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA.png?version=1;modificationDate=1614570570656&amp;cacheVersion=1&amp;api=v2\" data-height=\"115\" data-width=\"305\" data-unresolved-comment-count=\"0\" data-linked-resource-id=\"206045317\" data-linked-resource-version=\"1\" data-linked-resource-type=\"attachment\" data-linked-resource-default-alias=\"=D0=A1=D0=BF=D0=B5=D1=86=D0=B8=D0=B0=D0=BB=D0=B8=D0=B7=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=BD=D1=8B=D0=B9 =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA.png\" data-base-url=\"https://my-atlassian-site-146745.atlassian.net/wiki\" data-linked-resource-content-type=\"image/png\" data-linked-resource-container-id=\"206700555\" data-linked-resource-container-version=\"9\" data-media-id=\n" +
              "\"382938ff-bdbf-49e8-85fe-e52ab5c580e9\" data-media-type=\"file\" width=\n" +
              "\"407\" height=\"153\"/></span>\n" +
              "<p style=\"text-align: center;\">=D0=A0=D0=B8=D1=81. 5 =D0=A1=D0=BF=D0=B5=D1=86=D0=B8=D0=B0=D0=BB=D0=B8=D0=B7=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=BD=D1=8B=D0=B9 =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA</p>\n" +
              "<p>=D0=9F=D0=BE=D1=81=D0=BB=D0=B5 =D1=82=D0=BE=D0=B3=D0=BE, =D0=BA=D0=B0=D0=BA =D0=B2=D1=81=D0=B5 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8 =D0=B1=D1=8B=D0=BB=D0=B8 =D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B6=D0=B5=D0=BD=D1=8B =D0=BD=D0=B5=D0=BE=D0=B1=D1=85=D0=BE=D0=B4=D0=B8=D0=BC=D0=BE =D0=BF=D1=80=D0=BE=D0=B9=D1=82=D0=B8 =D1=81=D0=B2=D0=B5=D1=80=D0=BA=D1=83. =D0=94=D0=BB=D1=8F =\n" +
              "=D1=8D=D1=82=D0=BE=D0=B3=D0=BE =D0=B2 BOS =D0=BD=D0=B5=D0=BE=D0=B1=D1=85=D0=BE=D0=B4=D0=B8=D0=BC=D0=BE =D0=BE=D1=82=D0=BA=D1=80=D1=8B=D1=82=D1=8C =D0=96=D1=83=D1=80=D0=BD=D0=B0=D0=BB=D1=8B =E2=86=92 =D0=96=D1=83=D1=80=D0=BD=D0=B0=D0=BB =D1=81=D0=BE=D0=BE=D1=82=D0=B2=D0=B5=D1=82=D1=81=D1=82=D0=B2=D0=B8=D1=8F =D0=BA=D0=BE=D0=BD=D1=82=D1=80=D0=B0=D0=B3=D0=B5=D0=BD=D1=82=D0=BE=D0=B2 =D0=91=D0=B8=D1=80=D0=B6=D0=B8 =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B0=D0=BC =D0=B8 =D0=BF=D0=BE =D0=BE=D1=82=D0=B4=D0=B5=D0=BB=D1=8C=D0=BD=D0=BE=D1=81=D1=82=D0=B8 =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D0=B8=D1=82=D1=8C =D0=BA=D0=B0=D0=B6=D0=B4=D1=8B=D0=B9 =D0=B2=D0=B8=D0=B4 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B0.</p>\n" +
              "<p> </p>\n" +
              "<span class=\"confluence-embedded-file-wrapper image-center-wrapper conflu=\n" +
              "ence-embedded-manual-size\"><img class=\"confluence-embedded-image image-ce=\n" +
              "nter\" width=\"408\" loading=\"lazy\" src=\"b9fb053af39230e8b151edf19d497ed=\n" +
              "b\" data-image-src=\"https://my-atlassian-site-146745.atlassian.net/wiki/do=\n" +
              "wnload/attachments/206700555/%D0%A1%D0%B2%D0%B5%D1%80%D0%BA%D0%B0.png?versi=\n" +
              "on=1&amp;modificationDate=1614570897110&amp;cacheVersion=1&amp;api==\n" +
              "v2\" data-height=\"435\" data-width=\"918\" data-unresolved-comment-count=\n" +
              "\"0\" data-linked-resource-id=\"206045325\" data-linked-resource-version=\"1=\n" +
              "\" data-linked-resource-type=\"attachment\" data-linked-resource-default-alias=\"=D0=A1=D0=B2=D0=B5=D1=80=D0=BA=D0=B0.png\" data-base-url=\"https://my=\n" +
              "-atlassian-site-146745.atlassian.net/wiki\" data-linked-resource-content-type=\"image/png\" data-linked-resource-container-id=\"206700555\" data-linked-resource-container-version=\"9\" data-media-id=\"2560eefa-2945-433b-92ed-=\n" +
              "8229fc46dc64\" data-media-type=\"file\" height=\"193\"/></span>\n" +
              "<p style=\"text-align: center;\">=D0=A0=D0=B8=D1=81.6 =D0=A1=D0=B2=D0=B5=D1=80=D0=BA=D0=B0 =D1=81=D0=BE=D0=BE=D1=82=D0=B2=D0=B5=D1=82=D1=81=D1=82=D0=B2=D0=B8=D1=8F =D0=BA=D0=BE=D0=BD=D1=82=D1=80=D0=B0=D0=B3=D0=B5=D0=BD=D1=82=D0=BE=D0=B2 =D0=91=D0=B8=D1=80=D0=B6=D0=B8 </p>\n" +
              "<p></p>\n" +
              "<p>=D0=A1=D0=BE=D0=B3=D0=BB=D0=B0=D1=81=D0=BD=D0=BE =D1=80=D0=B5=D1=88=D0=B5=D0=BD=D0=B8=D1=8F =D0=A1=D0=BE=D0=B2=D0=B5=D1=82=D0=B0 =D0=B4=D0=B8=D1=80=D0=B5=D0=BA=D1=82=D0=BE=D1=80=D0=BE=D0=B2 (=D0=A1=D0=94) =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8 =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D1=85 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B9 =D0=B4=D0=BE=D0=BB=D0=B6=D0=BD=D1=8B =D1=85=D1=80=D0=B0=D0=BD=D0=B8=D1=82=D1=81=D1=8F 5 =D0=BB=D0=B5=D1=82. </p>\n" +
              "<p>=D0=9F=D1=80=D0=BE=D0=B4=D1=83=D0=BC=D0=B0=D1=82=D1=8C, =D1=87=D1=82=D0=BE =D1=84=D0=B0=D0=B9=D0=BB=D1=8B =D0=BA=D0=BE=D1=82=D0=BE=D1=80=D1=8B=D0=B5 =D0=B0=D0=B2=D1=82=D0=BE=D0=BC=D0=B0=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8 =D0=B1=D1=83=D0=B4=D1=83=D1=82 =D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B6=D0=B0=D1=82=D1=8C=D1=81=D1=8F =D0=B8 =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=82=D1=8C=D1=81=D1=8F =D0=BD=D0=BE=D0=B2=D0=BE=D0=B9 =D1=81=D0=B8=D1=81=D1=82=D0=B5=D0=BC=D0=BE=D0=B9, =D0=BD=D0=B0=D1=81=D1=82=D1=80=D0=BE=D0=B8=D1=82=D1=8C =D1=80=D0=B0=D1=81=D1=81=D1=8B=D0=BB=D0=BA=D1=83 =D1=81=D0=BE=D0=BE=D0=B1=D1=89=D0=B5=D0=BD=D0=B8=D0=B9 =D0=BD=D0=B0 =D0=BF=D0=BE=D1=87=D1=82=D1=83 =D1=81=D0=BE=D1=82=D1=80=D1=83=D0=B4=D0=BD=D0=B8=D0=BA=D0=B0=D0=BC =D0=9D=D0=9E. =D0=9F=D0=BE =D0=BF=D0=BE=D0=B4=D0=BE=D0=B7=D1=80=D0=B8=D1=82=D0=B5=D0=BB=D1=8C=D0=BD=D1=8B=D0=BC =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D0=BC =D0=B8 =D1=84=D0=B8=D0=B7. =D0=BB=D0=B8=D1=86=D0=B0=D0=BC =D0=B2=D1=8B=D1=81=D1=8B=D0=BB=D0=B0=D1=82=D1=8C =D0=B2 =D1=82=D0=BE=D0=BC =D0=B6=D0=B5 =D0=BF=D0=B8=D1=81=D1=8C=D0=BC=D0=B5. </p>\n" +
              "<h1 id=\"id-=D0=98=D0=BC=D0=BF=D0=BE=D1=80=D1=82=D0=B8=D0=BD=D1=84=D0=BE=D1=80=D0=BC=D0=B0=D1=86=D0=B8=D0=B8=D0=BE=D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D1=85=D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D1=85-=D0=9E=D0=BF=D1=82=D0=B8=D0=BC=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D0=B0=D0=BB=D0=B3=D0=BE=D1=80=D0=B8=D1=82=D0=BC=D0=B0=D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B7=D0=BA=D0=B8=D0=B8=D0=BD=D1=84=D0=BE=D1=80=D0=BC=D0=B0=D1=86=D0=B8=D0=B8=D0=BE=D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D1=85=D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D1=85\">=D0=9E=D0=BF=D1=82=D0=B8=D0=BC=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F =D0=B0=D0=BB=D0=B3=D0=BE=D1=80=D0=B8=D1=82=D0=BC=D0=B0 =D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B7=D0=BA=D0=B8 =D0=B8=D0=BD=D1=84=D0=BE=D1=80=D0=BC=D0=B0=D1=86=D0=B8=D0=B8 =D0=BE =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D1=85 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D1=85 </h1>\n" +
              "<p>=D0=98=D0=BC=D0=BF=D0=BE=D1=80=D1=82 =D0=B8=D0=BD=D1=84=D0=BE=D1=80=D0=BC=D0=B0=D1=86=D0=B8=D0=B8 =D0=BE =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=B8=D1=85 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D1=8F=D1=85 =D0=B1=D1=83=D0=B4=D0=B5=D1=82 =D0=BE=D1=81=D1=83=D1=89=D0=B5=D1=81=D1=82=D0=B2=D0=BB=D1=8F=D1=82=D1=8C=D1=81=D1=8F =D1=81 =D1=81=D0=B0=D0=B9=D1=82=D0=B0: <a href=\"https://kfm.gov.kz/ru/the-list-of-organizations-and-individuals-associa=\n" +
              "/\" class=\"external-link\" rel=\"nofollow\">https://kfm.gov.kz/ru/the-list-=\n" +
              "of-organizations-and-individuals-associa/</a></p>\n" +
              "<p><strong>1 =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C</strong> =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B9 =D0=B8 =D0=BB=D0=B8=D1=86, =D1=81=D0=B2=D1=8F=D0=B7=D0=B0=D0=BD=D0=BD=D1=8B=D1=85 =D1=81 =D1=84=D0=B8=D0=BD=D0=B0=D0=BD=D1=81=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=B8=D0=B5=D0=BC =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D0=B7=D0=BC=D0=B0 =D0=B8 =D1=8D=D0=BA=D1=81=D1=82=D1=80=D0=B5=D0=BC=D0=B8=D0=B7=D0=BC=D0=B0 (=D0=BC=D0=B5=D1=81=D1=82=D0=BD=D1=8B=D0=B5 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8).</p>\n" +
              "<p>=D0=9F=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=82=D1=8C XML =D1=84=D0=B0=D0=B9=D0=BB=D1=8B =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =\n" +
              "=D0=BF=D0=BE=D1=81=D0=BB=D0=B5 24:00 =D1=87=D0=B0=D1=81=D0=BE=D0=B2.</p>\n" +
              "<p>=D0=98=D0=B7 1 =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=BD=D1=8F =D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B6=D0=B0=D0=B5=D0=BC XML-=D1=84=D0=B0=D0=B9=D0=BB =C2=AB=D0=94=D0=B5=D0=B9=D1=81=D1=82=D0=B2=D1=83=D1=8E=D1=89=D0=B8=D0=B9=C2=BB=\n" +
              " <a href=\"https://kfm.gov.kz/blacklist/export/active/xml\" class=\"extern=\n" +
              "al-link\" rel=\"nofollow\">https://kfm.gov.kz/blacklist/export/active/xml</a>. =D0=95=D1=81=D0=BB=D0=B8 =D0=B2 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B5 =D0=BF=D0=BE=D1=8F=D0=B2=D0=BB=D1=8F=D1=8E=D1=82=D1=81=D1=8F =D0=BD=D0=BE=D0=B2=D1=8B=D0=B5 =D0=B7=D0=B0=D0=BF=D0=B8=D1=81=D0=B8 =D0=B4=D0=B5=D0=B9=D1=81=D1=82=D0=B2=D1=83=D1=8E=D1=89=D0=B8=D1=85 =D0=B8=D0=BB=D0=B8 =D0=B8=D1=81=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D1=85 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B9 =D0=B7=D0=B0=D0=BF=D0=B8=D1=81=D0=B0=D1=82=D1=8C =D0=B2 =D0=96=D1=83=D1=80=D0=BD=D0=B0=D0=BB BOS=\n" +
              ".</p>\n" +
              "<p>=D0=98=D0=B7 =D1=8D=D1=82=D0=BE=D0=B3=D0=BE =D0=B6=D0=B5 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B0 =D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B6=D0=B0=D0=B5=D0=BC XML-=D1=84=D0=B0=D0=B9=D0=BB =C2=AB=D0=92=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D0=B5=C2=BB, =D0=B2 =D1=81=D0=BB=D1=83=D1=87=D0=B0=D0=B5=\n" +
              " =D0=B5=D1=81=D0=BB=D0=B8 XML-</p>\n" +
              "<p><strong>2 =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C</strong> =D0=BC=D0=B5=D0=B6=D0=B4=D1=83=D0=BD=D0=B0=D1=80=D0=BE=D0=B4=D0=BD=D1=8B=D0=B9=\n" +
              " =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B9 =D0=B8 =D0=BB=D0=B8=D1=86, =D0=BF=D1=80=D0=B8=D1=87=D0=B0=D1=81=D1=82=D0=BD=D1=8B=D1=85 =D0=BA =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=BE=D0=B9 =D0=B8 =D1=8D=D0=BA=D1=81=D1=82=D1=80=D0=B5=D0=BC=D0=B8=D1=81=D1=82=D0=BA=D0=BE=D0=B9 =D0=B4=D0=B5=D1=8F=D1=82=D0=B5=D0=BB=D1=8C=D0=BD=D0=BE=D1=81=D1=82=D0=B8 (=D0=A1=D0=B2=D0=BE=D0=B4=D0=BD=D1=8B=D0=B9 =D1=81=D0=B0=D0=BD=D0=BA=D1=86=D0=B8=D0=BE=D0=BD=D0=BD=D1=8B=D0=B9 =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C =D0=A1=D0=BE=D0=B2=D0=B5=D1=82=D0=B0 =\n" +
              "=D0=B1=D0=B5=D0=B7=D0=BE=D0=BF=D0=B0=D1=81=D0=BD=D0=BE=D1=81=D1=82=D0=B8 =\n" +
              "=D0=9E=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8 =D0=9E=D0=B1=D1=8A=D0=B5=D0=B4=D0=B8=D0=BD=D0=B5=D0=BD=D0=BD=D1=8B=D1=85 =D0=9D=D0=B0=D1=86=D0=B8=D0=B9) (=D0=9E=D0=9E=D0=9D).</p>\n" +
              "<p>=D0=9F=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D0=BA=D0=B0 =D0=B8 =D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B7=D0=BA=D0=B0 XML-=D1=84=D0=B0=D0=B9=D0=BB=D0=B0 =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=BF=D0=BE=D1=81=D0=BB=D0=B5 2=\n" +
              "4:00 =D1=87=D0=B0=D1=81=D0=BE=D0=B2.</p>\n" +
              "<p>=D0=9F=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C =C2=AB=D0=94=D0=B5=D0=B9=D1=81=D1=82=D0=B2=D1=83=D1=8E=D1=89=D0=B8=D0=B5=C2=BB XML-=D1=84=D0=B0=D0=B9=D0=BB <a href=\"https://scsanctions.un.org/resources/xml/en/consoli=\n" +
              "dated.xml\" class=\"external-link\" rel=\"nofollow\">https://scsanctions.un.=\n" +
              "org/resources/xml/en/consolidated.xml</a>.</p>\n" +
              "<p>=D0=9F=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C =C2=AB=D0=92=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D0=B5=C2=BB</p>\n" +
              "<p>=D0=9B=D0=BE=D0=B3=D0=B8=D0=BA=D0=B0 =D1=80=D0=B0=D0=B1=D0=BE=D1=82=D1=8B =D1=81=D0=BE=D1=85=D1=80=D0=B0=D0=BD=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=B4=D0=BB=D1=8F =D0=B2=D1=81=D0=B5=D1=85 =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=BD=D0=B5=D0=B9.</p>\n" +
              "<p><strong>3 =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C</strong> =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA =D0=BB=D0=B8=D1=86, =D0=BF=D1=80=D0=B8=D1=87=D0=B0=D1=81=D1=82=D0=BD=D1=8B=D1=85 =D0=BA =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=BE=D0=B9 =D0=B4=D0=B5=D1=8F=D1=82=D0=B5=D0=BB=D1=8C=D0=BD=D0=BE=D1=81=D1=82=D0=B8 (=D0=9E=D0=B1=D1=80=D0=B0=D1=89=D0=B5=D0=BD=D0=B8=D1=8F =D0=B8=D0=BD=D0=BE=D1=81=D1=82=D1=80=D0=B0=D0=BD=D0=BD=D1=8B=D1=85 =D0=B3=D0=BE=D1=81=D1=83=D0=B4=D0=B0=D1=80=D1=81=D1=82=D0=B2 =D0=BE =D0=B2=D0=BE=D0=B7=D0=BC=D0=BE=D0=B6=D0=BD=D0=BE=D0=B9 =D0=BF=D1=80=D0=B8=D1=87=D0=B0=D1=81=D1=82=D0=BD=D0=BE=D1=81=D1=82=D0=B8 =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B8 =D0=B8=D0=BB=D0=B8 =D1=84=D0=B8=D0=B7=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=BE=D0=B3=D0=BE =D0=BB=D0=B8=D1=86=D0=B0 =D0=BA =D1=82=D0=B5=D1=80=D1=80=D0=BE=D1=80=D0=B8=D1=81=D1=82=D0=B8=D1=87=D0=B5=D1=81=D0=BA=D0=BE=D0=B9 =D0=B4=D0=B5=D1=8F=D1=82=D0=B5=D0=BB=D1=8C=D0=BD=D0=BE=D1=81=D1=82=D0=B8, =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8 =D0=BF=D0=BE =D0=B2=D0=B7=D0=B0=D0=B8=D0=BC=D0=BD=D0=BE=D0=B9 =D0=B7=D0=B0=D0=BC=D0=BE=D1=80=D0=BE=D0=B7=D0=BA=D0=B5).</p>\n" +
              "<p>=D0=9F=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C =C2=AB=D0=94=D0=B5=D0=B9=D1=81=D1=82=D0=B2=D1=83=D1=8E=D1=89=D0=B8=D0=B5=C2=BB <a href=\"https:=\n" +
              "//kfm.gov.kz/ru/the-list-of-organizations-and-individuals-associa/spisok-li=\n" +
              "cz,-prichastnyix-k-terroristicheskoj-dey/current.html\" class=\"external-li=\n" +
              "nk\" rel=\"nofollow\">https://kfm.gov.kz/ru/the-list-of-organizations-and-in=\n" +
              "dividuals-associa/spisok-licz,-prichastnyix-k-terroristicheskoj-dey/current=\n" +
              ".html</a> =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=82=D1=8C =D0=BD=D0=B0 =D1=81=D0=B0=D0=B9=D1=82=D0=B5 =D0=BF=D0=BE =D0=B4=D0=B0=D1=82=D0=B5. =\n" +
              "=D0=95=D1=81=D0=BB=D0=B8 =D0=BE=D0=BF=D1=83=D0=B1=D0=BB=D0=B8=D0=BA=D0=BE=D0=B2=D0=B0=D0=BD =D0=BD=D0=BE=D0=B2=D1=8B=D0=B9 =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA, =D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B6=D0=B0=D1=82=D1=8C XLS-=\n" +
              "=D1=84=D0=B0=D0=B9=D0=BB.</p>\n" +
              "<p>=D0=9F=D1=80=D0=B8=D0=BC=D0=B5=D1=80:</p>\n" +
              "<p class=\"media-group\"><img height=\"250\" style=\"margin: 2px; border: =\n" +
              "1px solid #ddd; box-sizing: border-box; vertical-align: text-bottom;\" src=\"cb39e905f498f9e2d98f4d9ee1ede46e\" width=\"250\"/></p>\n" +
              "<p>=D0=9F=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C =C2=AB=D0=92=D0=BA=D0=BB=D1=8E=D1=87=D0=B5=D0=BD=D0=BD=D1=8B=D0=B5=C2=BB: <a href=\"https://kfm=\n" +
              ".gov.kz/ru/the-list-of-organizations-and-individuals-associa/spisok-licz,-p=\n" +
              "richastnyix-k-terroristicheskoj-dey/included.html\" class=\"external-link\"\n" +
              "rel=\"nofollow\">https://kfm.gov.kz/ru/the-list-of-organizations-and-indivi=\n" +
              "duals-associa/spisok-licz,-prichastnyix-k-terroristicheskoj-dey/included.ht=\n" +
              "ml</a> =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=82=D1=8C =D0=BD=D0=B0 =\n" +
              "=D1=81=D0=B0=D0=B9=D1=82=D0=B5 =D0=BF=D0=BE =D0=B4=D0=B0=D1=82=D0=B5. =D0=95=D1=81=D0=BB=D0=B8 =D0=BE=D0=BF=D1=83=D0=B1=D0=BB=D0=B8=D0=BA=D0=BE=D0=B2=D0=B0=D0=BD =D0=BD=D0=BE=D0=B2=D1=8B=D0=B9 =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA, =D0=B7=D0=B0=D0=B3=D1=80=D1=83=D0=B6=D0=B0=D1=82=D1=8C XLS-=D1=84=D0=B0=D0=B9=D0=BB.</p>\n" +
              "<p>=D0=9B=D0=BE=D0=B3=D0=B8=D0=BA=D0=B0 =D1=80=D0=B0=D0=B1=D0=BE=D1=82=D1=8B =D1=81=D0=BE=D1=85=D1=80=D0=B0=D0=BD=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=B4=D0=BB=D1=8F =D0=B2=D1=81=D0=B5=D1=85 =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=BD=D0=B5=D0=B9.</p>\n" +
              "<p><strong>4 =D0=BF=D0=B5=D1=80=D0=B5=D1=87=D0=B5=D0=BD=D1=8C</strong> =D0=BE=D1=80=D0=B3=D0=B0=D0=BD=D0=B8=D0=B7=D0=B0=D1=86=D0=B8=D0=B9 =D0=B8 =D0=BB=D0=B8=D1=86, =D1=81=D0=B2=D1=8F=D0=B7=D0=B0=D0=BD=D0=BD=D1=8B=D1=85 =D1=81 =D1=84=D0=B8=D0=BD=D0=B0=D0=BD=D1=81=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=B8=D0=B5=D0=BC =D1=80=D0=B0=D1=81=D0=BF=D1=80=D0=BE=D1=81=D1=82=D1=80=D0=B0=D0=BD=D0=B5=D0=BD=D0=B8=D1=8F =D0=BE=D1=80=D1=83=D0=B6=D0=B8=D1=8F =D0=BC=D0=B0=D1=81=D1=81=D0=BE=D0=B2=D0=BE=D0=B3=D0=BE =D1=83=D0=BD=D0=B8=D1=87=D1=82=D0=BE=D0=B6=D0=B5=D0=BD=D0=B8=D1=8F.</p>\n" +
              "<p>=D0=9F=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D0=B5=D1=82=D1=81=D1=8F =D0=BD=D0=B0 =D1=81=D0=B0=D0=B9=D1=82=D0=B5 =D0=BF=D0=BE =D1=81=D1=81=D1=8B=D0=BB=D0=BA=D0=B5: <a href=\"https://kfm.gov.kz/ru/the-list-of-organizations=\n" +
              "-and-individuals-associa/perechen-organizaczij-i-licz-svyazannyix.html\" class=\"external-link\" rel=\"nofollow\">https://kfm.gov.kz/ru/the-list-of-org=\n" +
              "anizations-and-individuals-associa/perechen-organizaczij-i-licz-svyazannyix=\n" +
              ".html</a></p>\n" +
              "<p>=D0=9F=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=82=D1=8C =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=BF=D0=BE=D1=81=D0=BB=D0=B5 24:0=\n" +
              "0. =D0=9D=D0=B0 =D1=82=D0=B5=D0=BA=D1=83=D1=89=D0=B8=D0=B9 =D0=BC=D0=BE=D0=BC=D0=B5=D0=BD=D1=82 =D1=82=D0=B0=D0=BA=D0=BE=D0=B3=D0=BE =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B0 =D0=BD=D0=B5=D1=82, =D1=82=D0=B0=D0=BA =D0=BA=D0=B0=D0=BA =D0=B2 =D0=BD=D0=B0=D1=81=D1=82=D0=BE=D1=8F=D1=89=D0=B5=D0=B5 =D0=B2=D1=80=D0=B5=D0=BC=D1=8F =D0=B7=D0=B0=D0=BF=D0=B8=D1=81=D0=B8 =D0=BE=D1=82=D1=81=D1=83=D1=82=D1=81=D1=82=D0=B2=D1=83=D1=8E=D1=82.</p>\n" +
              "<p></p>\n" +
              "<p><strong>=D0=9A=D0=BE=D0=BD=D1=81=D0=BE=D0=BB=D0=B8=D0=B4=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=BD=D1=8B=D0=B5 =D1=81=D0=BF=D0=B8=D1=81=D0=BA=D0=B8</strong> =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=8E=D1=82=D1=81=D1=8F =D0=BD=D0=B0 =D1=81=D0=B0=D0=B9=D1=82=D0=B5 <a href=\"https://home.=\n" +
              "treasury.gov/policy-issues/financial-sanctions/consolidated-sanctions-list-=\n" +
              "data-files\" class=\"external-link\" rel=\"nofollow\">https://home.treasury.=\n" +
              "gov/policy-issues/financial-sanctions/consolidated-sanctions-list-data-file=\n" +
              "s</a> </p>\n" +
              "<p>=D0=97=D0=B0=D0=B3=D1=80=D1=83=D0=B6=D0=B0=D1=82=D1=8C XML-=D1=84=D0=B0=D0=B9=D0=BB <a href=\"https://www.treasury.gov/ofac/downloads/consolidate=\n" +
              "d/consolidated.xml\" class=\"external-link\" rel=\"nofollow\">CONSOLIDATED.X=\n" +
              "ML</a> =D0=B5=D0=B6=D0=B5=D0=B4=D0=BD=D0=B5=D0=B2=D0=BD=D0=BE =D0=BF=D0=BE=D1=81=D0=BB=D0=B5 24:00.</p>\n" +
              "<p>=D0=92 =D1=81=D0=BB=D1=83=D1=87=D0=B0=D0=B5 =D0=BD=D0=B0=D0=B9=D0=B4=D0=B5=D0=BD=D0=BD=D1=8B=D1=85 =D0=BD=D0=BE=D0=B2=D1=8B=D1=85 =D0=B7=D0=B0=D0=BF=D0=B8=D1=81=D0=B5=D0=B9 =D0=B7=D0=B0=D0=BF=D0=B8=D1=81=D1=8B=D0=B2=D0=B0=D1=82=D1=8C =D0=B2 =D0=B1=D0=B0=D0=B7=D1=83 =D0=B4=D0=B0=D0=BD=D0=BD=D1=8B=D1=85.</p>\n" +
              "<p><strong>=D0=A1=D0=BF=D0=B5=D1=86=D0=B8=D0=B0=D0=BB=D0=B8=D0=B7=D0=B8=D1=80=D0=BE=D0=B2=D0=B0=D0=BD=D0=BD=D1=8B=D0=B9 =D1=81=D0=BF=D0=B8=D1=81=D0=BE=D0=BA</strong> =D0=BF=D1=80=D0=BE=D0=B2=D0=B5=D1=80=D1=8F=D1=8E=D1=82=D1=81=D1=8F =D0=BD=D0=B0 =D1=81=D0=B0=D0=B9=D1=82=D0=B5: <a href=\"https:=\n" +
              "//home.treasury.gov/policy-issues/financial-sanctions/specially-designated-=\n" +
              "nationals-list-data-formats-data-schemas\" class=\"external-link\" rel=\"no=\n" +
              "follow\">https://home.treasury.gov/policy-issues/financial-sanctions/special=\n" +
              "ly-designated-nationals-list-data-formats-data-schemas</a> </p>\n" +
              "<p>=D0=97=D0=B0=D0=B3=D1=80=D1=83=D0=B6=D0=B0=D1=82=D1=8C XML-=D1=84=D0=B0=D0=B9=D0=BB <a href=\"https://www.treasury.gov/ofac/downloads/sdn.xml\" class=\"external-link\" rel=\"nofollow\">SDN.XML</a></p>\n" +
              "<p>=D0=92 =D1=81=D0=BB=D1=83=D1=87=D0=B0=D0=B5 =D0=BD=D0=B0=D0=B9=D0=B4=D0=B5=D0=BD=D0=BD=D1=8B=D1=85 =D0=BD=D0=BE=D0=B2=D1=8B=D1=85 =D0=B7=D0=B0=D0=BF=D0=B8=D1=81=D0=B5=D0=B9 =D0=B7=D0=B0=D0=BF=D0=B8=D1=81=D1=8B=D0=B2=D0=B0=D1=82=D1=8C =D0=B2 =D0=B1=D0=B0=D0=B7=D1=83 =D0=B4=D0=B0=D0=BD=D0=BD=D1=8B=D1=85.</p>\n" +
              "    </div>\n" +
              "</body>\n" +
              "</html>\n" +
              "<!--  -->"
        }
      }
  }
</script>

<style scoped>

</style>
