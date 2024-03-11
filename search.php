<?
if(isset($_REQUEST['json']) && $_REQUEST['json']){
    $test_result_1['url'] = "https://smmbanda.com/youtube/views/prosmotry-youtube-s-uderzhaniem";
    $test_result_1['name'] = "Просмотры YouTube с удержанием 5+ минут [Скорость до 500 просмотров /сутки]";
    
    $test_result_2['url'] = "https://smmbanda.com/vkontakte/followers-vk/zhivye-podpischiki-vkontakte-vysokaya-skorost";
    $test_result_2['name'] = "Живые подписчики для сообществ ВКонтакте, плавное добавление [Скорость до 500 заявок /сутки] ";
    
    
    $result = [];
    
    array_push($result, $test_result_1);
    array_push($result, $test_result_2);
    
    die(json_encode($result));
}
?>